import React from "react";

type SkeletonProps = {
  count?: number;
  duration?: number;
  width?: string | null;
  wrapper?: React.ElementType<any>;
  height?: string | null;
  circle?: boolean;
  style?: React.CSSProperties;
  className?: string;
};

const SkeletonLoading = ({
  count = 1,
  duration = 1.2,
  width,
  wrapper: Wrapper,
  height,
  circle,
  style: customStyle,
  className: customClassName,
}: SkeletonProps) => {
  const elements: JSX.Element[] = [];

  for (let i = 0; i < count; i++) {
    let style: React.CSSProperties = {};

    if (width !== null) {
      style.width = width;
    }

    if (height !== null) {
      style.height = height;
    }

    if (width !== null && height !== null && circle) {
      style.borderRadius = "50%";
    }

    let classNames = `inline-block bg-dashboard-input rounded-lg inline-block animate-skeleton duration-${duration} bg-gradient-skeleton bg-[200px] bg-cover bg-no-repeat`;
    if (customClassName) {
      classNames += " " + customClassName;
    }

    elements.push(
      <span
        key={i}
        className={classNames}
        style={{
          ...customStyle,
          ...style,
        }}
      >
        &zwnj;
      </span>
    );
  }

  return (
    <span>
      {Wrapper
        ? elements.map((element, i) => (
            <Wrapper key={i}>
              {element}
              &zwnj;
            </Wrapper>
          ))
        : elements}
    </span>
  );
};

// SkeletonLoading.defaultProps = {
//   count: 1,
//   duration: 2,
//   width: null,
//   wrapper: undefined,
//   height: null,
//   circle: false,
//   style: {},
//   className: "",
// };

export default SkeletonLoading;
