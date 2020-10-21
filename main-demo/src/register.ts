import * as singleSpa from "single-spa";

const loadApp = async (name: string, path: string) => {
  try {
    await runScript(path);
  } catch {
    console.log("load sub app's javascript error");
  }
  console.log(`window.${name}=`, (window as any)[name]);
  return (window as any)[name];
};

export const registerApps = () => {
  const apps = [
    { name: "webpack5app", path: "http://localhost:3002/main.js" },
    { name: "webpack4app", path: "http://localhost:3003/main.js" },
  ];
  apps.forEach(({ name, path }) => {
    const subAppActiveFunction = pathnameInclude("/");
    singleSpa.registerApplication(
      name,
      () => loadApp(name, path),
      subAppActiveFunction,
      {}
    );
  });
};

export const runScript = async (url: string) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;

    const firstScript = document.getElementsByTagName("script")[0];
    (firstScript as any).parentNode.insertBefore(script, firstScript);
  });
};

export const pathnameInclude = (pathname: string) => (location: Location) =>
  location.pathname.includes(pathname);
