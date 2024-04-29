//import { ImageSegmenter, SegmentationMask, FilesetResolver } from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.2";

async function createImageSegmenter() {
  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
  );

  imageSegmenter = await ImageSegmenter.createFromOptions(vision,{
    baseOptions:{
      modelAssetPath:
      "https://storage-googleapis.com/mediapipe-models/image_segmenter/selfie_segmenter/float16/latest/selfie_segmenter.tflite",
      delegate:"GPU"
    },
    outputCategoryMask:true,
    outpuConfidenceMasks:false,
    runningMode:"IMAGE"
  })
}

createImageSegmenter();