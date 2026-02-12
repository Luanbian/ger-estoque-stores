export const getSubdomain = () => {
  const hostname = window.location.hostname;

  if (hostname === "localhost") return "";

  const parts = hostname.split(".");

  if (parts.length > 1 && parts[1] === "localhost") {
    return parts[0];
  }

  return "";
};
