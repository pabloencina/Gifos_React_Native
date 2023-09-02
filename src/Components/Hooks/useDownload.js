import * as FileSystem from "expo-file-system";

const useDownload = () => {
  console.log("Descarga");
  const gifDir = FileSystem.cacheDirectory + "giphy/";

  const gifFileUri = (gifId) => gifDir + `gif_${gifId}_200.gif`;
  const gifUrl = (gifId) => `https://media1.giphy.com/media/${gifId}/200.gif`;

  async function ensureDirExists() {
    const dirInfo = await FileSystem.getInfoAsync(gifDir);
    if (!dirInfo.exists) {
      console.log("Gif directory doesn't exist, creating...");
      await FileSystem.makeDirectoryAsync(gifDir, { intermediates: true });
    }
  }

  async function addMultipleGifs(gifIds) {
    try {
      await ensureDirExists();

      console.log("Downloading", gifIds.length, "gif files...");
      await Promise.all(
        gifIds.map((id) => FileSystem.downloadAsync(gifUrl(id), gifFileUri(id)))
      );
    } catch (e) {
      console.error("Couldn't download gif files:", e);
    }
  }

  async function getSingleGif(gifId) {
    await ensureDirExists();

    const fileUri = gifFileUri(gifId);
    const fileInfo = await FileSystem.getInfoAsync(fileUri);

    if (!fileInfo.exists) {
      console.log("Gif isn't cached locally. Downloading...");
      await FileSystem.downloadAsync(gifUrl(gifId), fileUri);
    }

    return fileUri;
  }

  async function getGifContentUri(gifId) {
    return FileSystem.getContentUriAsync(await getSingleGif(gifId));
  }

  async function deleteAllGifs() {
    console.log("Deleting all GIF files...");
    await FileSystem.deleteAsync(gifDir);
  }

  return { getGifContentUri, addMultipleGifs };
};

export default useDownload;
