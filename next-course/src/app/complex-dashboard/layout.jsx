export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}) {
  const isLoggedIn = false;
  return isLoggedIn ? (
    <div>
      {children}
      <div>{users}</div>
      <div>{revenue}</div>
      <div>{notifications}</div>
    </div>
  ) : (
    login
  );
}
