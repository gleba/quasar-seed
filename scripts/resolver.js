import importMap from "quasar/dist/transforms/import-map.json";

export default (name) => {
  const importName = importMap[name];
  console.log("::", name);
  if (!importName) {
    return;
  }

  const script = `quasar/${importName}`;
  return {
    path: script,
  };
};
