export interface TopbarProps {
  title: string;
};

export const Topbar = ({ title }: TopbarProps) => {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      height: "56px",
      borderBottom: "1px solid #ddd",
      paddingLeft: "24px",
      paddingRight: "24px",
    }}>
      <h2 style={{
        fontFamily: "Arimo, sans-serif",
      }}>
        {title}
      </h2>
    </div>
  );
};