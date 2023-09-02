"use client";

import { ChangeEvent, useState } from "react";

export const InputFile = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files?.[0] || null;
    setFile(image);
    if (image) {
      const reader = new FileReader();
      reader.onloadend = (e) => {
        const base64String = e.target?.result;
        console.log(base64String);
        setPreview(base64String as string);
      };
      reader.readAsDataURL(image);
    }
  };
  return (
    <>
      {file ? (
        <div
          className="w-full h-full cursor-pointer bg-cover bg-center rounded-3xl"
          style={{ backgroundImage: `url(${preview})` }}
        ></div>
      ) : (
        <input
          className="block w-full opacity-0 cursos-pointer rounded-3xl"
          type="file"
          onChange={handleChange}
        />
      )}
    </>
  );
};
