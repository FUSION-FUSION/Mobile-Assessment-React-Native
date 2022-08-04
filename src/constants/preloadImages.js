import { Image } from "react-native";
import { Asset } from "expo-asset";

const gbAppCloud = require("../assets/images/bg-app-cloud.png");

const bgDashboardBalance = require("../assets/images/bg-dashboard-balance.png");
const DeliveryVan = require("../assets/images/Delivery-Van.png");
const icAeroplane = require("../assets/images/ic-aeroplane.png");
const icBike = require("../assets/images/ic-bike.png");

const iconCongratulations = require("../assets/images/ic-congratulations.png");
const iconNotification = require("../assets/images/ic-notification.png");
const iconRoadCharter = require("../assets/images/ic-road-charter.png");
const iconRoadInterstate = require("../assets/images/ic-road-interstate.png");
const iconRoadSameState = require("../assets/images/ic-road-same-state.png");
const iconSearch = require("../assets/images/ic-search.png");
const iconTruck = require("../assets/images/ic-truck.png");
const splashLogo = require("../assets/images/splash_logo.png");

export const loadedImages = {
  gbAppCloud,

  bgDashboardBalance,
  DeliveryVan,
  icAeroplane,
  icBike,
  iconCongratulations,
  iconNotification,
  iconRoadCharter,
  iconRoadInterstate,
  iconRoadSameState,
  iconSearch,
  iconTruck,
  splashLogo,
};

// cache images
const cacheImages = (images) =>
  Object.values(images).map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    }

    return Asset.fromModule(image).downloadAsync();
  });

// preload async
const loadAssetsAsync = async () => {
  const imageAssets = cacheImages(loadedImages);
  // promise load all
  return Promise.all([...imageAssets]);
};

export default loadAssetsAsync;
