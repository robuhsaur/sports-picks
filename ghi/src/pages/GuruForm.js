import React, { useEffect } from "react";
import { useState } from "react";
import { useAuthContext } from "../Auth";

function BootStrapInput(props) {
  const { id, placeholder, labelText, value, onChange, type } = props;

  return (
    <div className="mb-4">
      <label htmlFor={id}>{labelText}</label>
      <input
        required
        value={value}
        onChange={onChange}
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}

function GuruForm(props) {
  const { token } = useAuthContext();
  const [pick, setPick] = useState("");
  const [pickDetail, setPickDetail] = useState("");
  const [guruId, setGuruId] = useState();
  const [formId, setFormId] = useState(0);
  const [isTrue, setisTrue] = useState(false);

  /**
   * on page load, check if form exists
   * if forms exists, grab form id
   * if not, keep form id null so guru can post form
   */

  useEffect(() => {
    async function getGuruId() {
      const url = `http://localhost:8000/guruinfo`;
      const response = await fetch(url, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });
      console.log(response, "---- this is the response");
      const data = await response.json();
      console.log(data, "BRUH");
      const guruId = data["id"]; // guru id
      console.log(guruId);
      setGuruId(guruId);
    }
    getGuruId();
    // if (guruId) {
    //     getGuruForms()
    // }
  }, [token]);

  useEffect(() => {
    async function getGuruForms() {
      const guru_id = guruId;
      console.log(guru_id);
      const guruForms = `http://localhost:8000/guru/${guru_id}/form`;
      const response = await fetch(guruForms, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const formData = await response.json();
      console.log(formData, "------Formadadasd");
      if (response.ok) {
        if (formData) {
          const guruForm = formData[0];
          const formId = guruForm["id"];
          setFormId(formId);
          console.log(formId, "-----getguruform: formId");
        }
      }
    }
    getGuruForms();
  }, [formId, token, guruId]);

  async function updateGuruForm(e) {
    console.log(formId, "above url");
    e.preventDefault();
    const guru_id = guruId;
    const pick_detail = pickDetail;
    const putUrl = `http://localhost:8000/guru/${guru_id}/form/${formId}`;
    console.log(formId, "----inside updateGuruForm");
    const response = await fetch(putUrl, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ pick, pick_detail, guru_id }),
    });
    const data = await response.json();
    console.log(data, "data brother");

    if (response.ok) {
      console.log("form has been updated");
      console.log(data);
    } else {
      console.log("form did not update");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setisTrue(true);
    const pick_detail = pickDetail;
    const url = `http://localhost:8000/gurus/form`;
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ pick, pick_detail }),
    });
    const data = await response.json();
    console.log(data);
    setFormId(data["id"]);
    console.log(formId, "right below data");
    if (response.ok) {
      console.log(formId, "post and formid -----");
    } else {
      console.log("no post");
    }
  }

  async function finalForm(e) {
    e.preventDefault();
    console.log(formId);
    if (!isTrue) {
      handleSubmit(e);
      console.log("getGuruForms");
    } else {
      updateGuruForm(e);
      console.log("updating");
    }
  }

  return (
    <form>
      <BootStrapInput
        id="pick"
        placeholder="Guru Pick"
        labelText="Put ya pick here"
        value={pick}
        onChange={(e) => setPick(e.target.value)}
        type="text"
      />
      <BootStrapInput
        id="pickDetail"
        placeholder="Pick Detail"
        labelText="Put ya Odds here"
        value={pickDetail}
        onChange={(e) => setPickDetail(e.target.value)}
        type="text"
      />

      <button onClick={finalForm}> Submit Pick </button>
    </form>
  );
}

export default GuruForm;
