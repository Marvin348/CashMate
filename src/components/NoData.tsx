const NoData = ({ message = "Keine Daten vorhanden" }) => {
  return (
    <div className="text-center text-sm text-muted-foreground py-8">
      {message}
    </div>
  );
};
export default NoData;
