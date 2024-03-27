import React, { useEffect, useState } from "react";
import styles from "./Loading.module.scss";
import Loading from "./Loading";

// todo: this will be used to show the when the user for the first loads the page. loading screen will be shown unless and until all the asseets are loaded.

const InitialLoadingForHome = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isFinishedLoading = () => {
      if (document.readyState === "complete") {
        setLoading(false);
      }
    };
    isFinishedLoading();
    document.addEventListener("readystatechange", isFinishedLoading);
    return () => {
      document.removeEventListener("readystatechange", isFinishedLoading);
    };
  }, []);

  useEffect(() => {
    if (loading) {
      const bodyStyling = document.body.style;
      bodyStyling.height = "100vh";
      bodyStyling.overflow = "hidden";
    } else {
      const bodyStyling = document.body.style;
      bodyStyling.height = "auto";
      bodyStyling.overflow = "auto";
    }
  }, [loading]);

  return (
    <div className={`${styles.loader} ${loading ? styles.active : ""}`}>
      <Loading />
    </div>
  );
};

export default InitialLoadingForHome;
