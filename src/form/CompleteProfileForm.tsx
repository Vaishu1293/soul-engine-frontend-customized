"use client";

import { SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import NiceSelectForm from "@/elements/niceSelect/NiceSelectForm";
import { selectAreaOfInterest } from "@/data/nice-select-data";
import { toast } from "sonner";
import { fetchWithAuth } from "@/utils/fetchWithAuth";
import Link from "next/link";
import { useTarotSetupStore } from "@/store/useTarotSetupStore";

const MAX_CORE_Q = 5;
const MAX_MOTIVATION = 5;

function getTodayToMonthEndRange(): any {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const lastDay = new Date(year, month + 1, 0);

  const format = (d: Date) =>
    d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return {
    type: "period",
    start: `${format(today)}`,
    end: `${format(lastDay)}`
  }

  // return `${format(today)} to ${format(lastDay)}`;
}

const CompleteProfileForm = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [interest, setInterest] = useState("");
  const [isSuperUser, setSuperUser] = useState(false);

  const setTimeframe = useTarotSetupStore(s => s.setTimeframe);
  const setAreaOfInterest = useTarotSetupStore(s => s.setAreaOfInterest);
  const setUserCoreQ = useTarotSetupStore(s => s.setUserCoreQ);
  const setPartnerCoreQ = useTarotSetupStore(s => s.setPartnerCoreQ);
  const setThirdPartyCoreQ = useTarotSetupStore(s => s.setThirdPartyCoreQ);
  const setPartnerMotivation = useTarotSetupStore(s => s.setPartnerMotivation);
  const setIsSuperUser = useTarotSetupStore(s => s.setIsSuperuser);

  const handleSelfSuperUserToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;      // true or false
    setFieldValue("selfSuperUser", value);
    setSuperUser(value);               // <-- update Zustand instantly
  };


  const {
    handleChange,
    handleSubmit,
    handleBlur,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      interest: "",
      situation: "",
      selfFirstName: "",
      selfLastName: "",
      selfDoB: "",
      selfToB: "",
      selfPoB: "",
      selfDST: false,
      selfSuperUser: false,
      partnerFirstName: "",
      partnerLastName: "",
      partnerDoB: "",
      partnerToB: "",
      partnerPoB: "",
      partnerDST: false,
      coreQuestions: [] as string[],                 // ⬅️ dynamic
      partnerCoreQuestions: [] as string[],
      thirdPartyCoreQuestions: [] as string[],       // ⬅️ dynamic (relationship only)
      partnerMotivation: [] as string[],
    },
    validationSchema: Yup.object({
      interest: Yup.string().required("Area of interest is required"),
      situation: Yup.string().required("Situation is required"),
      selfFirstName: Yup.string().required("Self First Name is required"),
      selfLastName: Yup.string().required("Self last Name is required"),
      selfDoB: Yup.string().required("Date of birth is required"),
      selfToB: Yup.string().required("Time of birth is required"),
      selfPoB: Yup.string().required("Place of birth is required"),
      selfDST: Yup.boolean(),
      selfSuperUser: Yup.boolean(),
      // Partner fields required only if interest = relationship
      partnerFirstName: Yup.string().when("interest", {
        is: (v: string) => v === "relationship",
        then: (s) => s.required("Partner First Name is required"),
        otherwise: (s) => s.optional(),
      }),
      partnerLastName: Yup.string().when("interest", {
        is: (v: string) => v === "relationship",
        then: (s) => s.required("Partner Last Name is required"),
        otherwise: (s) => s.optional(),
      }),
      partnerDoB: Yup.string().when("interest", {
        is: (v: string) => v === "relationship",
        then: (s) => s.required("Partner date of Birth is required"),
        otherwise: (s) => s.optional(),
      }),
      partnerToB: Yup.string().when("interest", {
        is: (v: string) => v === "relationship",
        then: (s) => s.required("Partner Time of Birth is required"),
        otherwise: (s) => s.optional(),
      }),
      partnerPoB: Yup.string().when("interest", {
        is: (v: string) => v === "relationship",
        then: (s) => s.required("Partner Place of Birth is required"),
        otherwise: (s) => s.optional(),
      }),
      partnerDST: Yup.boolean(),
      // Core questions: allow 0–5 while building, enforce max; you can make min(1) if needed
      coreQuestions: Yup.array().of(Yup.string().trim()).max(MAX_CORE_Q),
      partnerCoreQuestions: Yup.array().of(Yup.string().trim()).max(MAX_CORE_Q),
      thirdPartyCoreQuestions: Yup.array().of(Yup.string().trim()).max(MAX_CORE_Q),
      partnerMotivation: Yup.array().of(Yup.string().trim()).max(MAX_MOTIVATION),
    }),
    onSubmit: async (vals, { resetForm }) => {
      try {
        const response = await fetchWithAuth(
          "http://localhost:5000/api/auth/complete-profile",
          {
            method: "POST",
            body: JSON.stringify(vals),
          }
        );

        if (!response.ok) throw new Error("Registration failed");
        const result = await response.json();

        // Build timeframe object
        const timeframeRange = getTodayToMonthEndRange();

        // 🔮 Store everything in Zustand (observable state)
        setTimeframe(timeframeRange);
        setAreaOfInterest(result.areaOfInterest);
        setUserCoreQ(result.userCoreQuestions);
        setPartnerCoreQ(result.partnerCoreQuestions ?? []);
        setThirdPartyCoreQ(result.thirdPartyCoreQuestions ?? []);
        setPartnerMotivation(result.partnerMotivation ?? []);
        setIsSuperUser(result.isSuperUser ?? false);

        toast.success("Complete Profile successful!");
        resetForm();

        setTimeout(() => {
          router.push("/tarot-draw?spread=angleSpread&fromRegister=true");
        }, 1000);

      } catch (err) {
        console.error(err);
        toast.error("Complete Profile error!");
      }
    },
  });

  // ---------- Dynamic Core Questions (Self) ----------
  const addCoreQ = () => {
    if (values.coreQuestions.length >= MAX_CORE_Q) return;
    setFieldValue("coreQuestions", [...values.coreQuestions, ""]);
  };

  const removeCoreQ = (idx: number) => {
    const next = [...values.coreQuestions];
    next.splice(idx, 1);
    setFieldValue("coreQuestions", next);
  };

  const updateCoreQ = (idx: number, v: string) => {
    const next = [...values.coreQuestions];
    next[idx] = v;
    setFieldValue("coreQuestions", next);
  };

  // ---------- Dynamic Core Questions (Partner) ----------
  const addPartnerCoreQ = () => {
    if (values.partnerCoreQuestions.length >= MAX_CORE_Q) return;
    setFieldValue("partnerCoreQuestions", [
      ...values.partnerCoreQuestions,
      "",
    ]);
  };

  const removePartnerCoreQ = (idx: number) => {
    const next = [...values.partnerCoreQuestions];
    next.splice(idx, 1);
    setFieldValue("partnerCoreQuestions", next);
  };

  const updatePartnerCoreQ = (idx: number, v: string) => {
    const next = [...values.partnerCoreQuestions];
    next[idx] = v;
    setFieldValue("partnerCoreQuestions", next);
  };

  // ---------- Dynamic Core Questions (Third Party) ----------
  const addThirdPartyCoreQ = () => {
    if (values.thirdPartyCoreQuestions.length >= MAX_CORE_Q) return;
    setFieldValue("thirdPartyCoreQuestions", [
      ...values.thirdPartyCoreQuestions,
      "",
    ]);
  };

  const removeThirdPartyCoreQ = (idx: number) => {
    const next = [...values.thirdPartyCoreQuestions];
    next.splice(idx, 1);
    setFieldValue("thirdPartyCoreQuestions", next);
  };

  const updateThirdPartyCoreQ = (idx: number, v: string) => {
    const next = [...values.thirdPartyCoreQuestions];
    next[idx] = v;
    setFieldValue("thirdPartyCoreQuestions", next);
  };

  // ---------- Dynamic Motivation Questions ----------

  const addPartnerMotivation = () => {
    if (values.partnerMotivation.length >= MAX_MOTIVATION) return;
    setFieldValue("partnerMotivation", [
      ...values.partnerMotivation,
      "",
    ]);
  };

  const removePartnerMotivation = (idx: number) => {
    const next = [...values.partnerMotivation];
    next.splice(idx, 1);
    setFieldValue("partnerMotivation", next);
  };

  const updatePartnerMotivation = (idx: number, v: string) => {
    const next = [...values.partnerMotivation];
    next[idx] = v;
    setFieldValue("partnerMotivation", next);
  };

  return (
    <form onSubmit={handleSubmit} className="sign-up-form space-y-8">
      {/* Step 1: Situation + Area of Interest */}
      {step === 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-2">
            <label htmlFor="interest-select">Area of Interest</label>
            <div className="w-full">
              <NiceSelectForm
                options={selectAreaOfInterest}
                defaultCurrent={0}
                onChange={(item: any) => {
                  if (item) {
                    const val = String(item.option || "").toLowerCase();
                    setFieldValue("interest", val);
                    setInterest(val);
                  }
                }}
                name="interest"
                className="gender-category-select"
                setSelelectForm={function (_value: SetStateAction<string>): void { }}
              />
              {touched.interest && errors.interest && (
                <div className="text-danger">{errors.interest as string}</div>
              )}
            </div>
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">
              Describe Your Situation
            </label>
            <textarea
              name="situation"
              placeholder="Explain your current life situation"
              value={values.situation}
              onChange={handleChange}
              rows={4}
              className="form-textarea w-full"
            />
            {touched.situation && errors.situation && (
              <div className="text-danger">{errors.situation as string}</div>
            )}
          </div>

          <div className="col-span-2">
            <button type="button" onClick={() => setStep(2)} className="fill-btn">
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Self Details */}
      {step === 2 && (
        <div className="row">
          <div className="col-md-6">
            <div className="single-input-unit">
              <label>Self First Name</label>
              <input
                type="text"
                name="selfFirstName"
                value={values.selfFirstName}
                onChange={handleChange}
                placeholder="Self First Name"
              />
              {touched.selfFirstName && errors.selfFirstName && (
                <div className="text-danger">{errors.selfFirstName as string}</div>
              )}
            </div>
          </div>

          <div className="col-md-6">
            <div className="single-input-unit">
              <label>Self Last Name</label>
              <input
                type="text"
                name="selfLastName"
                value={values.selfLastName}
                onChange={handleChange}
                placeholder="Self Last Name"
              />
              {touched.selfLastName && errors.selfLastName && (
                <div className="text-danger">{errors.selfLastName as string}</div>
              )}
            </div>
          </div>

          {/* Date of Birth */}
          <div className="col-md-6">
            <div className="single-input-unit">
              <label>Date of Birth</label>
              <input
                type="date"
                name="selfDoB"
                value={values.selfDoB}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.selfDoB && errors.selfDoB && (
                <div className="text-danger">{errors.selfDoB as string}</div>
              )}
            </div>
          </div>

          {/* Time of Birth */}
          <div className="col-md-6">
            <div className="single-input-unit">
              <label>Time of Birth</label>
              <input
                type="time"
                name="selfToB"
                value={values.selfToB}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.selfToB && errors.selfToB && (
                <div className="text-danger">{errors.selfToB as string}</div>
              )}
            </div>
          </div>

          {/* Place of Birth */}
          <div className="col-md-6">
            <div className="single-input-unit">
              <label>Place of Birth</label>
              <input
                type="text"
                name="selfPoB"
                placeholder="City, Country"
                value={values.selfPoB}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.selfPoB && errors.selfPoB && (
                <div className="text-danger">{errors.selfPoB as string}</div>
              )}
            </div>
          </div>

          <div className="col-md-3 flex align-items-center justify-center">
            <div className="note flex align-items-center m-4 p-4">
              <input
                className="contact-check-box me-2"
                type="checkbox"
                id="selfDST"
                name="selfDST"                 // ✅ add name
                checked={values.selfDST}
                onChange={handleChange}
              />
              <label htmlFor="selfDST">DST</label>
            </div>
          </div>

          <div className="col-md-3 flex align-items-center justify-center">
            <div className="note flex align-items-center m-4 p-4">
              <input
                className="contact-check-box me-2"
                type="checkbox"
                id="selfSuperUser"
                name="selfSuperUser"                 // ✅ add name
                checked={values.selfSuperUser}
                onChange={handleSelfSuperUserToggle}
              />
              <label htmlFor="selfSuperUser">Super User</label>
            </div>
          </div>

          <div className="col-6">
            <div className="flex justify-between gap-4">
              <button type="button" onClick={() => setStep(1)} className="back-btn flex-1 me-2">
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(interest === "relationship" ? 3 : 4)}
                className="fill-btn flex-1"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Partner Details (only if interest is 'relationship') */}
      {step === 3 && interest === "relationship" && (
        <div className="row">
          <div className="col-md-6">
            <div className="single-input-unit">
              <label>Partner First Name</label>
              <input
                type="text"
                name="partnerFirstName"
                value={values.partnerFirstName}
                onChange={handleChange}
                placeholder="Partner First Name"
              />
              {touched.partnerFirstName && errors.partnerFirstName && (
                <div className="text-danger">{errors.partnerFirstName as string}</div>
              )}
            </div>
          </div>

          <div className="col-md-6">
            <div className="single-input-unit">
              <label>Partner Last Name</label>
              <input
                type="text"
                name="partnerLastName"
                value={values.partnerLastName}
                onChange={handleChange}
                placeholder="Partner Last Name"
              />
              {touched.partnerLastName && errors.partnerLastName && (
                <div className="text-danger">{errors.partnerLastName as string}</div>
              )}
            </div>
          </div>

          {/* Date of Birth */}
          <div className="col-md-6">
            <div className="single-input-unit">
              <label>Partner Date of Birth</label>
              <input
                type="date"
                name="partnerDoB"
                value={values.partnerDoB}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.partnerDoB && errors.partnerDoB && (
                <div className="text-danger">{errors.partnerDoB as string}</div>
              )}
            </div>
          </div>

          {/* Time of Birth */}
          <div className="col-md-6">
            <div className="single-input-unit">
              <label>Partner Time of Birth</label>
              <input
                type="time"
                name="partnerToB"
                value={values.partnerToB}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.partnerToB && errors.partnerToB && (
                <div className="text-danger">{errors.partnerToB as string}</div>
              )}
            </div>
          </div>

          {/* Place of Birth */}
          <div className="col-md-6">
            <div className="single-input-unit">
              <label>Partner Place of Birth</label>
              <input
                type="text"
                name="partnerPoB"
                placeholder="City, Country"
                value={values.partnerPoB}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.partnerPoB && errors.partnerPoB && (
                <div className="text-danger">{errors.partnerPoB as string}</div>
              )}
            </div>
          </div>

          <div className="col-md-6 flex align-items-center justify-center">
            <div className="note flex align-items-center m-4 p-4">
              <input
                className="contact-check-box me-2"
                type="checkbox"
                id="partnerDST"
                name="partnerDST"             // ✅ add name
                checked={values.partnerDST}
                onChange={handleChange}
              />
              <label htmlFor="partnerDST">DST</label>
            </div>
          </div>

          <div className="col-6">
            <div className="flex justify-between gap-4">
              <button type="button" onClick={() => setStep(2)} className="back-btn flex-1 me-2">
                Back
              </button>
              <button type="button" onClick={() => setStep(4)} className="fill-btn flex-1">
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Add core questions (Self) */}
      {step === 4 && (
        <div className="row">
          <div className="col-12 mb-3">
            <button
              type="button"
              onClick={addCoreQ}
              className="create-question-btn"
              disabled={values.coreQuestions.length >= MAX_CORE_Q}
              aria-expanded="true"
            >
              + Add Core Question
            </button>
            <div className="text-xs opacity-70 mt-1">
              {values.coreQuestions.length}/{MAX_CORE_Q} added
            </div>
          </div>

          {/* Dynamic inputs styled like the searchbar */}
          <div className="col-12 space-y-3">
            {values.coreQuestions.map((q, idx) => (
              <div key={idx} className="offset-widget offset_searchbar mb-15">
                <form
                  className="filter-search-input"
                  onSubmit={(e) => e.preventDefault()}
                >
                  {/* Accessible label */}
                  <label htmlFor={`core-q-${idx}`} className="sr-only">
                    {`Core Question ${idx + 1}`}
                  </label>

                  <input
                    id={`core-q-${idx}`}
                    type="text"
                    placeholder={`Core Question ${idx + 1}`}
                    value={q}
                    onChange={(e) => updateCoreQ(idx, e.target.value)}
                  />
                  <button onClick={() => removeCoreQ(idx)}>
                    <i className="fal fa-trash"></i>
                  </button>
                </form>
              </div>
            ))}
          </div>

          <div className="col-12 mt-6">
            <div className="flex justify-between gap-4">
              <button type="button" onClick={() => setStep(interest === "relationship" ? 3 : 2)} className="back-btn flex-1 me-2">
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(interest === "relationship" ? 5 : 8)}  // ✅ correct next step
                className="fill-btn flex-1"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 5: Partner Core questions (only if relationship) */}
      {step === 5 && interest === "relationship" && (
        <div className="row">
          <div className="col-12 mb-3">
            <button
              type="button"
              onClick={addPartnerCoreQ}
              className="create-question-btn"
              disabled={values.partnerCoreQuestions.length >= MAX_CORE_Q}
            >
              + Add Partner Core Question
            </button>
            <div className="text-xs opacity-70 mt-1">
              {values.partnerCoreQuestions.length}/{MAX_CORE_Q} added
            </div>
          </div>

          {/* Dynamic inputs styled like the searchbar */}
          <div className="col-12 space-y-3">
            {values.partnerCoreQuestions.map((q, idx) => (
              <div key={idx} className="offset-widget offset_searchbar mb-15">
                <form
                  className="filter-search-input"
                  onSubmit={(e) => e.preventDefault()}
                >
                  {/* Accessible label */}
                  <label htmlFor={`partner-core-q-${idx}`} className="sr-only">
                    {`Partner Core Question ${idx + 1}`}
                  </label>
                  <input
                    id={`partner-core-q-${idx}`}
                    type="text"
                    placeholder={`Partner Core Question ${idx + 1}`}
                    value={q}
                    onChange={(e) => updatePartnerCoreQ(idx, e.target.value)}
                  />
                  <button onClick={() => removePartnerCoreQ(idx)}>
                    <i className="fal fa-trash"></i>
                  </button>
                </form>
              </div>
            ))}
          </div>

          <div className="col-12 mt-6">
            <div className="flex justify-between gap-4">
              <button type="button" onClick={() => setStep(4)} className="back-btn flex-1 me-2">
                Back
              </button>
              {/* setStep(interest === "relationship" ? 5 : 8) */}
              <button type="button" onClick={() => setStep(interest === "relationship" && isSuperUser ? 6 : 7)} className="fill-btn flex-1">
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 6: Third Party Core questions (only if relationship) */}
      {step === 6 && interest === "relationship" && (
        <div className="row">
          <div className="col-12 mb-3">
            <button
              type="button"
              onClick={addThirdPartyCoreQ}
              className="create-question-btn"
              disabled={values.thirdPartyCoreQuestions.length >= MAX_CORE_Q}
            >
              + Add Third Party Core Question
            </button>
            <div className="text-xs opacity-70 mt-1">
              {values.thirdPartyCoreQuestions.length}/{MAX_CORE_Q} added
            </div>
          </div>

          {/* Dynamic inputs styled like the searchbar */}
          <div className="col-12 space-y-3">
            {values.thirdPartyCoreQuestions.map((q, idx) => (
              <div key={idx} className="offset-widget offset_searchbar mb-15">
                <form
                  className="filter-search-input"
                  onSubmit={(e) => e.preventDefault()}
                >
                  {/* Accessible label */}
                  <label htmlFor={`third-party-core-q-${idx}`} className="sr-only">
                    {`Third Party Core Question ${idx + 1}`}
                  </label>
                  <input
                    id={`third-party-core-q-${idx}`}
                    type="text"
                    placeholder={`Third Party Core Question ${idx + 1}`}
                    value={q}
                    onChange={(e) => updateThirdPartyCoreQ(idx, e.target.value)}
                  />
                  <button onClick={() => removeThirdPartyCoreQ(idx)}>
                    <i className="fal fa-trash"></i>
                  </button>
                </form>
              </div>
            ))}
          </div>

          <div className="col-12 mt-6">
            <div className="flex justify-between gap-4">
              <button type="button" onClick={() => setStep(5)} className="back-btn flex-1 me-2">
                Back
              </button>
              <button type="button" onClick={() => setStep(7)} className="fill-btn flex-1">
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 7: Partner Motivation (only if relationship) */}
      {step === 7 && interest === "relationship" && (
        <div className="row">
          <div className="col-12 mb-3">
            <button
              type="button"
              onClick={addPartnerMotivation}
              className="create-question-btn"
              disabled={values.partnerMotivation.length >= MAX_MOTIVATION}
            >
              + Add Partner Motivation Question
            </button>
            <div className="text-xs opacity-70 mt-1">
              {values.partnerMotivation.length}/{MAX_MOTIVATION} added
            </div>
          </div>

          {/* Dynamic inputs styled like the searchbar */}
          <div className="col-12 space-y-3">
            {values.partnerMotivation.map((q, idx) => (
              <div key={idx} className="offset-widget offset_searchbar mb-15">
                <form
                  className="filter-search-input"
                  onSubmit={(e) => e.preventDefault()}
                >
                  {/* Accessible label */}
                  <label htmlFor={`partner-motivation-${idx}`} className="sr-only">
                    {`Partner Motivation ${idx + 1}`}
                  </label>
                  <input
                    id={`partner-motivation-${idx}`}
                    type="text"
                    placeholder={`Partner Motivation ${idx + 1}`}
                    value={q}
                    onChange={(e) => updatePartnerMotivation(idx, e.target.value)}
                  />
                  <button onClick={() => removePartnerMotivation(idx)}>
                    <i className="fal fa-trash"></i>
                  </button>
                </form>
              </div>
            ))}
          </div>

          <div className="col-12 mt-6">
            <div className="flex justify-between gap-4">
              <button type="button" onClick={() => setStep(interest === "relationship" && isSuperUser ? 6 : 5)} className="back-btn flex-1 me-2">
                Back
              </button>
              <button type="button" onClick={() => setStep(8)} className="fill-btn flex-1">
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 8: Final submit */}
      {step === 8 && (
        <div className="col-12">
          <div className="flex justify-between gap-4">
            <button type="submit" className="fill-btn flex-1">
              Submit
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default CompleteProfileForm;
