interface iconProps {
  src: string;
  alt: string;
  className: string;
}

const Icon = (props: iconProps) => {
  const { src, alt, className } = props;
  return (
    <li className={className}>
      <img src={src} alt={alt} />
    </li>
  );
};

export { Icon };
