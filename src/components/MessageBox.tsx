const MessageBox = ({
  variant = "info",
  text,
}: {
  variant: "info" | "success" | "error" | "warning";
  text: string;
}) => {
  return (
    <div className="toast toat-end toast-middle">
      {variant === "info" && (
        <div className={`alert alert-info`}>
          <span>{text}</span>
        </div>
      )}
      {variant === "success" && (
        <div className={`alert alert-success`}>
          <span>{text}</span>
        </div>
      )}
      {variant === "warning" && (
        <div className={`alert alert-warning`}>
          <span>{text}</span>
        </div>
      )}
      {variant === "error" && (
        <div className={`alert alert-error`}>
          <span>{text}</span>
        </div>
      )}
    </div>
  );
};

export default MessageBox;
