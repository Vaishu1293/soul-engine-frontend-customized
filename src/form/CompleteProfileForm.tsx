"use client";

import { SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import NiceSelectForm from "@/elements/niceSelect/NiceSelectForm"; // assuming your select component
import { selectAreaOfInterest } from "@/data/nice-select-data"; // import your Area of Interest array
import { toast } from "sonner";
import { fetchWithAuth } from "@/utils/fetchWithAuth";
import Link from "next/link";

const CompleteProfileForm = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [interest, setInterest] = useState("");

  const {
    handleChange,
    handleSubmit,
    handleBlur,
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
      partnerFirstName: "",
      partnerLastName: "",
      partnerDoB: "",
      partnerToB: "",
      partnerPoB: "",
      partnerDST: false
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
      partnerFirstName: Yup.string().required("Partner First Name is required"),
      partnerLastName: Yup.string().required("Partner Last Name is required"),
      partnerDoB: Yup.string().required("Partner date of Birth is required"),
      partnerToB: Yup.string().required("Partner Time of Birth is required"),
      partnerPoB: Yup.string().required("Partner Place of Birth is required"),
      partnerDST: Yup.boolean(),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log(values);
        const response = await fetchWithAuth("http://localhost:5000/api/auth/complete-profile", {
          method: "POST",
          body: JSON.stringify(values),
        });


        if (!response.ok) {
          throw new Error("Registration failed");
        }

        const result = await response.json();
        toast.success("Complete Profile successful!");

        resetForm();

        setTimeout(() => {
          router.push("/tarot-draw?spread=timelineSpread&fromRegister=true");  // 👈 Go to TarotDraw page with spread param
        }, 1000);
      } catch (err) {
        console.error(err);
        toast.error("Complete Profile error!");
      }
    },
  });

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
                    handleChange({ target: { name: "interest", value: item.option.toLowerCase() } });
                    setInterest(item.option.toLowerCase());
                  }
                }}
                name="interest"
                className="gender-category-select"
                setSelelectForm={function (value: SetStateAction<string>): void {
                  // throw new Error("Function not implemented.");
                }}
              />
            </div>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">Describe Your Situation</label>
            <textarea
              name="situation"
              placeholder="Explain your current life situation"
              value={values.situation}
              onChange={handleChange}
              rows={4}
              className="form-textarea w-full"
            ></textarea>
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
              {touched.selfDoB && errors.selfDoB && <div className="text-danger">{errors.selfDoB}</div>}
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
              {touched.selfToB && errors.selfToB && <div className="text-danger">{errors.selfToB}</div>}
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
              {touched.selfPoB && errors.selfPoB && <div className="text-danger">{errors.selfPoB}</div>}
            </div>
          </div>
          <div className="col-md-6 flex align-items-center justify-center">
            <div className="note flex align-items-center m-4 p-4">
              <input className="contact-check-box me-2" type="checkbox" id="selfDST" checked={values.selfDST} onChange={handleChange} />
              <label htmlFor="selfDST">
                DST
              </label>
            </div>
          </div>
          <div className="col-6">
            <div className="flex justify-between gap-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="back-btn flex-1 me-2"
              >
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
              {touched.partnerDoB && errors.partnerDoB && <div className="text-danger">{errors.partnerDoB}</div>}
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
              {touched.partnerToB && errors.partnerToB && <div className="text-danger">{errors.partnerToB}</div>}
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
              {touched.partnerPoB && errors.partnerPoB && <div className="text-danger">{errors.partnerPoB}</div>}
            </div>
          </div>
          <div className="col-md-6 flex align-items-center justify-center">
            <div className="note flex align-items-center m-4 p-4">
              <input className="contact-check-box me-2" type="checkbox" id="partnerDST" checked={values.partnerDST} onChange={handleChange} />
              <label htmlFor="partnerDST">
                DST
              </label>
            </div>
          </div>
          <div className="col-6">
            <div className="flex justify-between gap-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="back-btn flex-1 me-2"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(4)}
                className="fill-btn flex-1"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Step 4: Final submit (if not relationship) */}
      {step === 4 && (
        <div className="col-6">
          <div className="flex justify-between gap-4">
            <button
              type="submit"
              className="fill-btn flex-1"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default CompleteProfileForm;
