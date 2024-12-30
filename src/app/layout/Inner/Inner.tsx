export default function Inner({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mt-10 p-4 box-border w-[500px] min-h-screen overflow-y-hidden relative bg-[#f9fafb]">
      {children}
    </div>
  );
}
