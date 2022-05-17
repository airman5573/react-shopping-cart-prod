import styles from "./thumbnail-loading-indicator.module.scss";

const cn = require("classnames");

function ThumbnailLoadingIndicator() {
  return (
    <div className={cn("indicator-wrapper", styles["indicator-wrapper"])}>
      <div className={cn("indicator", styles.indicator)} />
    </div>
  );
}

export default ThumbnailLoadingIndicator;