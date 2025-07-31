import React from "react";
import { Skeleton } from "@mui/material";

interface Props {
  rows?: number;
}

const CollectionLoading: React.FC<Props> = () => {
  return (
    <>
      <div>
        <Skeleton
          variant="rectangular"
          sx={{
            width: "100%",
            height: "45em",
            backgroundColor: "#cccccc82",
          }}
        />
        <Skeleton
          variant="text"
          sx={{
            backgroundColor: "#cccccc82",
            marginTop: "0.8em",
            height: "3em",
          }}
        />
      </div>
      <div>
        <Skeleton
          variant="rectangular"
          sx={{
            width: "100%",
            height: "45em",
            backgroundColor: "#cccccc82",
          }}
        />
        <Skeleton
          variant="text"
          sx={{
            backgroundColor: "#cccccc82",
            marginTop: "0.8em",
            height: "3em",
          }}
        />
      </div>
      <div>
        <Skeleton
          variant="rectangular"
          sx={{
            width: "100%",
            height: "45em",
            backgroundColor: "#cccccc82",
          }}
        />
        <Skeleton
          variant="text"
          sx={{
            backgroundColor: "#cccccc82",
            marginTop: "0.8em",
            height: "3em",
          }}
        />
      </div>
      <div>
        <Skeleton
          variant="rectangular"
          sx={{
            width: "100%",
            height: "45em",
            backgroundColor: "#cccccc82",
          }}
        />
        <Skeleton
          variant="text"
          sx={{
            backgroundColor: "#cccccc82",
            marginTop: "0.8em",
            height: "3em",
          }}
        />
      </div>
      <div>
        <Skeleton
          variant="rectangular"
          sx={{
            width: "100%",
            height: "45em",
            backgroundColor: "#cccccc82",
          }}
        />
        <Skeleton
          variant="text"
          sx={{
            backgroundColor: "#cccccc82",
            marginTop: "0.8em",
            height: "3em",
          }}
        />
      </div>
      <div>
        <Skeleton
          variant="rectangular"
          sx={{
            width: "100%",
            height: "45em",
            backgroundColor: "#cccccc82",
          }}
        />
        <Skeleton
          variant="text"
          sx={{
            backgroundColor: "#cccccc82",
            marginTop: "0.8em",
            height: "3em",
          }}
        />
      </div>
    </>
  );
};

export default CollectionLoading;
