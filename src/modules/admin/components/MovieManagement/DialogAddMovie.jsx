import React, { useRef, useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from '@material-tailwind/react';

export default function DialogAddMovie({ open, onOpen: handleOpen }) {
  const inputImage = useRef();
  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Add Movie</DialogHeader>
        <DialogBody>
          <form className="flex flex-col items-center gap-4">
            <div className="flex w-full flex-col items-end gap-6">
              <Input size="md" label="Tên phim" />
            </div>
            <div className="flex w-full flex-col items-end gap-6">
              <Input size="md" label="Trailer" />
            </div>
            <div className="flex w-full flex-col items-end gap-6">
              <input type="file" hidden ref={inputImage} />
              <Button
                variant="outlined"
                className="flex items-center gap-3 w-full"
                onClick={() => inputImage.current.click()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
                Upload Files
              </Button>
            </div>
            <div className="flex w-full flex-col items-end gap-6">
              <Textarea size="md" label="Mô tả" resize={true} />
            </div>
            <div className="flex w-full flex-col items-end gap-6">
              <Input size="md" label="Đánh giá" />
            </div>
          </form>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
