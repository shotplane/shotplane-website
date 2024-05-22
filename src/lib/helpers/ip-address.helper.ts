export const fetchResultGeo = async () => {
  try {
    const result = await fetch(`https://geolocation-db.com/json/`)
      .then((res) => res.json())
      .catch((error) => "error_ip");
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
