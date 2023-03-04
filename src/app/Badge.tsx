import { BookStatus } from "@/lib/schemes";

const statusStyle = {
  NotRecommended: {
    path: "M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m2.59 6L12 10.59L9.41 8L8 9.41L10.59 12L8 14.59L9.41 16L12 13.41L14.59 16L16 14.59L13.41 12L16 9.41L14.59 8Z",
    color: "#ef5e5e",
  },
  Read: {
    path: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8l-1.41-1.42Z",
    color: "#a8c69f",
  },
  Started: {
    path: "M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7 13h10v-2H7",
    color: "#f5ee9e",
  },
};

export default function Badge({ status }: { status: BookStatus }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="116"
      height="116"
      viewBox="0 0 24 24"
    >
      <title>{status}</title>
      <path fill={statusStyle[status].color} d={statusStyle[status].path} />
    </svg>
  );
}
