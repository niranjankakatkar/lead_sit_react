import { Button, FormControlLabel, Switch } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Slide, toast } from "react-toastify";
import Navbar from "../Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddCashback() {
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [customer, setCustomer] = useState();
  const [cashback, setCashback] = useState();
  const [minpurchase, setMinpurchase] = useState();
  const [maxdiscount, setMaxdiscount] = useState();
  const [startdate, setStartdate] = useState(null);
  const [enddate, setEnddate] = useState(null);
  const [limit, setLimit] = useState();
  const [activeFlag, setActiveFlag] = useState(true);
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("cashback", cashback);
    formData.append("customer", customer);
    formData.append("minpurchase", minpurchase);
    formData.append("maxdiscount", maxdiscount);
    formData.append("startdate", startdate);
    formData.append("enddate", enddate);
    formData.append("limit", limit);
    formData.append("file", file);

    axios
      .post("http://43.205.22.150:5000/cashback/createCashbackImg", formData)
      .then(() => {
        toast.success("Record Added Successfully", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
          transition: Slide,
        });
        navigate("/addcashback");
        setTimeout(() => {
          window.location.reload();
        }, 4000);
      })
      .catch(() => {
        toast.error("Something went wrong", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
          transition: Slide,
        });
      });
  };

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navbar />
      <div
        className="page-wrapper"
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f4f4f4",
          padding: "20px",
          paddingTop: "100px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="modal-body"
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "30px",
            width: "100%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="row">
            <div className="col-md-12">
              <div className="form-field-item">
                <div className="profile-picture">
                  <div className="upload-profile">
                    <div className="profile-img company-profile-img">
                      <img
                        id="company-img"
                        className="img-fluid me-0"
                        src={
                          imagePreview ||
                          "assets/img/companies/company-add-img.svg"
                        }
                        alt="profile-img"
                      />
                    </div>
                    <div className="add-profile">
                      <h5>Upload a New Photo</h5>
                      <span>Profile-pic.jpg</span>
                    </div>
                  </div>
                  <div className="img-upload">
                    <label className="btn btn-upload">
                      Upload{" "}
                      <input
                        type="file"
                        accept="image/png,image/jpg,image/jpeg"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="input-block mb-3">
                <label className="form-label">Title Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="input-block mb-3">
                <label className="form-label">Customer</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter customer"
                  name="customer"
                  value={customer}
                  onChange={(e) => setCustomer(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="input-block mb-3">
                <label className="form-label">Cashback</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Cashback"
                  name="cashback"
                  value={cashback}
                  onChange={(e) => setCashback(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="input-block mb-3">
                <label className="form-label">Minimum Purchase</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Discount"
                  name="minpurchase"
                  value={minpurchase}
                  onChange={(e) => setMinpurchase(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="input-block mb-3">
                <label className="form-label">Max Discount</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Max Discount"
                  name="maxdiscount"
                  value={maxdiscount}
                  onChange={(e) => setMaxdiscount(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="input-block mb-3">
                <label className="form-label">Limit</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Limit"
                  name="limit"
                  value={limit}
                  onChange={(e) => setLimit(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="input-block mb-3">
                <label className="form-label">Start Date</label>
                <DatePicker
                  selected={startdate}
                  onChange={(date) => setStartdate(date)}
                  dateFormat="yyyy-MM-dd"
                  className="form-control"
                  placeholderText="Enter Start Date"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="input-block mb-3">
                <label className="form-label">End Date</label>
                <DatePicker
                  selected={enddate}
                  onChange={(date) => setEnddate(date)}
                  dateFormat="yyyy-MM-dd"
                  className="form-control"
                  placeholderText="Enter End Date"
                />
              </div>
            </div>

            {/* Active Flag */}
            <div className="col-md-12">
              <div className="input-block mb-3">
                <FormControlLabel
                  control={
                    <Switch
                      checked={activeFlag}
                      onChange={() => setActiveFlag(!activeFlag)}
                    />
                  }
                  label="Active"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div
              className="col-md-12"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="input-block">
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
