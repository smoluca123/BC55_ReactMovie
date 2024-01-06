import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Typography,
} from '@material-tailwind/react';
import React from 'react';
import ReactPlayer from 'react-player';

export default function DiaglogDetail({ movie, isShowModal, onToggle }) {
  return (
    <Dialog open={isShowModal} handler={onToggle}>
      <DialogHeader className="flex justify-between">
        <Typography variant="h5">{movie.tenPhim} Trailer</Typography>
        <IconButton
          className="bg-transparent shadow-none text-red-600 p-4"
          onClick={onToggle}
        >
          <FontAwesomeIcon
            className="text-xl"
            icon="fa-solid fa-circle-xmark"
          />
        </IconButton>
      </DialogHeader>
      <DialogBody>
        <ReactPlayer
          url={
            movie.trailer.includes('http')
              ? movie.trailer.replace('embed/', 'watch?v=')
              : 'https://www.youtube.com/watch?v=Ru4Jbmh7bcQ'
          }
          width="100%"
        />
      </DialogBody>
      <DialogFooter>
        <Button className="text-red-500 bg-transparent" onClick={onToggle}>
          Cancel
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
