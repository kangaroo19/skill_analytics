export default function Inner({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="pt-14 p-4 box-border  min-h-screen overflow-y-hidden relative bg-[#cee8ff]">{children}</div>;
}
