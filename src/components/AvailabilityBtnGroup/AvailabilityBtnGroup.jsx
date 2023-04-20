import { availabilitySource } from "../../dictionaries/availabilitySource";

const AvailabilityBtnGroup = ({ content, maxNumberOfResults }) => {
  const availabilityData = JSON.parse(content.availabilityData);
  const availabilitySources = availabilitySource.sort((source) => source.order);
  var currentNumberOfResults = 0;
  var showCurrentSource = true;
  return (
    <div className="content-item__link-btn_wrapper">
      {availabilitySources.map((source, i) => {
        const sourceData = availabilityData.find((data) =>
          source.sourceIds.includes(data.SourceId)
        );
        if (sourceData && maxNumberOfResults) {
          currentNumberOfResults++;
          showCurrentSource = currentNumberOfResults <= maxNumberOfResults;
        }
        return sourceData && showCurrentSource ? (
          <div
            key={i}
            className="content-item__link-btn"
            onClick={() =>
              window.open(sourceData.WebUrl, "_blank", "noopener,noreferrer")
            }
          >
            <img src={source.icon} alt={source.name} />
          </div>
        ) : null;
      })}
    </div>
  );
};
export default AvailabilityBtnGroup;
