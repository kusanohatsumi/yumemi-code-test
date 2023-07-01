export default function Checkbox(props: any) {
  const prefData = props.prefData;

  return (
    <>
      <form>
        {prefData === undefined
          ? "Loading..."
          : prefData.map((doc: any) => (
              <div className="formItem" key={doc.prefCode}>
                <input
                  type="checkbox"
                  id={doc.prefCode}
                  name={doc.prefName}
                  value={doc.prefCode}
                  onChange={props.onChange}
                />
                <label htmlFor={doc.prefCode}>{doc.prefName}</label>
              </div>
            ))}
      </form>
    </>
  );
}
