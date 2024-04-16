const Explorer = ({ explorerData }) => {
  console.log(explorerData);
  return (
    <div className="mt-6 text-lg">
      <div>📁 {explorerData.name}</div>

      <div className="ml-3">
        {explorerData.children.map((item) => (
          <>
            {item.isFolder ? (
              <div>
                <div>📁 {item.name}</div>
                {/* {item?.children?.map((child) => {
                  return <Explorer explorerData={child} />;
                })} */}
              </div>
            ) : (
              <div>📄 {item.name}</div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Explorer;
