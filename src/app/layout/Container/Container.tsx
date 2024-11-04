export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full max-w-[500px] mx-auto bg-gray-100 rounded-md text-black">
      {children}
    </div>
  );
}
