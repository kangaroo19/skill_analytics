export default function Content({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="p-4">{children}</div>;
}
