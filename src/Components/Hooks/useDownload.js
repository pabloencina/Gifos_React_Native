import React from "react";
import RNFetchBlob from "rn-fetch-blob";
import { PermissionsAndroid } from "react-native";

const useDownload = () => {
  const handleDownload = async () => {
    try {
      const permissionGranted = await requestStoragePermission();

      if (permissionGranted) {
        const { dirs } = RNFetchBlob.fs;
        const downloadPath = `${dirs.DownloadDir}/${selectedGif.id}.gif`;

        await RNFetchBlob.config({
          path: downloadPath,
        }).fetch("GET", selectedGif.images.downsized_medium.url);

        console.log("GIF downloaded successfully:", downloadPath);
      } else {
        console.log("Permission denied for storage access.");
      }
    } catch (error) {
      console.error("Error while downloading GIF:", error);
    }
  };
  return { handleDownload };
};

export default useDownload;
