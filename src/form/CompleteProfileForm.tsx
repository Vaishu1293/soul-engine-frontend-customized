"use client";

import { SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import NiceSelectForm from "@/elements/niceSelect/NiceSelectForm"; // assuming your select component
import { selectAreaOfInterest } from "@/data/nice-select-data"; // import your Area of Interest array

const CompleteProfileForm = () => {
  const router = useRouter();
  const [interest, setInterest] = useState("");

  const formik = useFormik({
    initialValues: {
      dob: "",
      tob: "",
      pob: "",
      interest: "",
      partnerName: "",
      partnerDob: "",
      partnerTob: "",
      partnerPob: "",
      situation: "",
    },
    validationSchema: Yup.object({
      dob: Yup.string().required("Date of birth is required"),
      tob: Yup.string().required("Time of birth is required"),
      pob: Yup.string().required("Place of birth is required"),
      interest: Yup.string().required("Area of interest is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      router.push("/dashboard");
    },
  });

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = formik;

  return (
    <form onSubmit={handleSubmit} className="sign-up-form">
      <div className="row">

        {/* Date of Birth */}
        <div className="col-md-6">
          <div className="single-input-unit">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={values.dob}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.dob && errors.dob && <div className="text-danger">{errors.dob}</div>}
          </div>
        </div>

        {/* Time of Birth */}
        <div className="col-md-6">
          <div className="single-input-unit">
            <label>Time of Birth</label>
            <input
              type="time"
              name="tob"
              value={values.tob}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.tob && errors.tob && <div className="text-danger">{errors.tob}</div>}
          </div>
        </div>

        {/* Place of Birth */}
        <div className="col-md-6">
          <div className="single-input-unit">
            <label>Place of Birth</label>
            <input
              type="text"
              name="pob"
              placeholder="City, Country"
              value={values.pob}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.pob && errors.pob && <div className="text-danger">{errors.pob}</div>}
          </div>
        </div>

        {/* Area of Interest */}
        <div className="col-md-6">
          <div className="single-input-unit mb-30">
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
                } }
                name="interest"
                className="gender-category-select" setSelelectForm={function (value: SetStateAction<string>): void {
                  throw new Error("Function not implemented.");
                } }              />
            </div>
          </div>
        </div>

        {/* Partner Details (Only if Relationship) */}
        {interest === "relationship" && (
          <>
            <div className="col-md-6">
              <div className="single-input-unit">
                <label>Partner Name</label>
                <input
                  type="text"
                  name="partnerName"
                  value={values.partnerName}
                  onChange={handleChange}
                  placeholder="Partner Name"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="single-input-unit">
                <label>Partner DOB</label>
                <input
                  type="date"
                  name="partnerDob"
                  value={values.partnerDob}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="single-input-unit">
                <label>Partner TOB</label>
                <input
                  type="time"
                  name="partnerTob"
                  value={values.partnerTob}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="single-input-unit">
                <label>Partner Place of Birth</label>
                <input
                  type="text"
                  name="partnerPob"
                  value={values.partnerPob}
                  onChange={handleChange}
                  placeholder="City, Country"
                />
              </div>
            </div>
          </>
        )}

        {/* Always visible: Describe Your Situation */}
        <div className="col-md-12">
          <div className="single-input-unit mt-2">
            <label>Describe Your Situation</label>
            <textarea
              name="situation"
              placeholder="Explain your current life situation"
              value={values.situation}
              onChange={handleChange}
              className="form-textarea"
              rows={4}
            ></textarea>
          </div>
        </div>

      </div>

      {/* Submit Button */}
      <div className="sign-up-btn">
        <button type="submit" className="fill-btn">
          Submit & Continue
        </button>
      </div>
    </form>
  );
};

export default CompleteProfileForm;
