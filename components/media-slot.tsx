import styles from "./media-slot.module.css";

type MediaSlotProps = {
  aspectRatio?: "16:9" | "21:9" | "4:3" | "1:1" | "3:4";
  type?: "image" | "video";
  label?: string;
  src?: string;
  alt?: string;
  className?: string;
};

function ImageIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" />
      <path d="M3 16l5-5 4 4 3-3 6 6" />
      <circle cx="9" cy="9" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="14" height="14" />
      <path d="M17 10l5-3v10l-5-3z" />
    </svg>
  );
}

export function MediaSlot({
  aspectRatio = "16:9",
  type = "image",
  label,
  src,
  alt,
  className,
}: MediaSlotProps) {
  const slotClassName = [styles.slot, className].filter(Boolean).join(" ");
  const placeholderText =
    type === "video" ? "VIDEO PLACEHOLDER" : "IMAGE PLACEHOLDER";

  return (
    <div className={slotClassName} data-aspect={aspectRatio}>
      {src ? (
        type === "video" ? (
          <video
            className={styles.media}
            src={src}
            playsInline
            muted
            loop
            autoPlay
          />
        ) : (
          <img className={styles.media} src={src} alt={alt ?? label ?? ""} />
        )
      ) : (
        <div className={styles.placeholder} role="img" aria-label={placeholderText}>
          <div className={styles.placeholderInner}>
            {type === "video" ? <VideoIcon /> : <ImageIcon />}
            <p className={styles.placeholderLabel}>{placeholderText}</p>
          </div>
        </div>
      )}
      {label ? <p className={styles.caption}>{label}</p> : null}
    </div>
  );
}
