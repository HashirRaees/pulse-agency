"use client";
import { Box, Modal, TextField } from "@mui/material";
import React from "react";
import PrimaryBtn from "../landing_page_components/PrimaryBtns/PrimaryBtn";
// import { Reveal } from "@/utils/Reveal";
import Image from "next/image";

const DownloadBook = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div
        className="flex w-full flex-col-reverse items-center gap-5 px-5  pb-12 pt-20 md:flex-row md:justify-between md:px-40 md:py-24 lg:mt-10"
        style={{
          backgroundImage: "url('/images/app_page_images/radial.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="z-10 md:mt-0 md:mb-12 md:px-4">
          <h2 className="mb-6 text-2xl font-bold tracking-wide md:text-4xl">
            Download Your Free eBook <br />
            to Brand Like a Boss
          </h2>
          <p className="text-white md:text-normal text-xs">Learn the Psychology of Iconic Brands.</p>

          <div className="pt-5">
          <PrimaryBtn text={"Download Now"} onClick={() => setOpen(true)} />
          <DownloadModal open={open} handleClose={() => setOpen(false)} />
          </div>
        </div>

        <Image
          src={"/images/brand like a boss book mockup.png"}
          width={400}
          height={400}
          loading="eager"
        />
      </div>
    </>
  );
};

export default DownloadBook;

const DownloadModal = ({ open, handleClose }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/images/book-img.pdf";
    link.download = "/images/book-img.pdf";
    link.click();
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <h2 className="mb-4 text-center text-xl font-bold text-black-2">
          Download Your Free eBook
        </h2>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          margin="normal"
        />
        <div className="w-full flex justify-between p-4">
          <PrimaryBtn text={"Cancel"} onClick={handleClose} />
          <PrimaryBtn text={"Submit"} onClick={handleDownload} />
        </div>
      </Box>
    </Modal>
  );
};
