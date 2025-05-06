"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";

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

        <div className="col-md-12">
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

        <div className="col-md-12">
          <div className="single-input-unit">
            <label>Area of Interest</label>
            <select
              name="interest"
              value={values.interest}
              onChange={(e) => {
                handleChange(e);
                setInterest(e.target.value);
              }}
              onBlur={handleBlur}
              className="form-select"
              required
            >
              <option value="">Select</option>
              <option value="relationship">Relationship</option>
              <option value="career">Career</option>
              <option value="spiritual">Spiritual</option>
              <option value="health">Health</option>
            </select>
            {touched.interest && errors.interest && <div className="text-danger">{errors.interest}</div>}
          </div>
        </div>

        {interest === "relationship" ? (
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
        ) : (
          <div className="col-md-12">
            <div className="single-input-unit">
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
        )}
      </div>

      <div className="sign-up-btn">
        <button type="submit" className="fill-btn">
          Submit & Continue
        </button>
      </div>
    </form>
  );
};

export default CompleteProfileForm;
