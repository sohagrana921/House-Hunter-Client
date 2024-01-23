const SubtitleSectionTitle = ({ title, subTitle }) => {
  return (
    <div className="my-6 text-center space-y-0">
      <h1 className="text-4xl font-semibold">{title}</h1>
      <p className="text-sm">{subTitle}</p>
    </div>
  );
};

export default SubtitleSectionTitle;
