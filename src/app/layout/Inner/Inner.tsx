export default function Inner({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="pt-10 p-4 box-border  min-h-screen overflow-y-hidden relative bg-[#f9fafb] bg-gradient-to-b from-blue-100 to-blue-500">
      {children}
    </div>
  );
}
