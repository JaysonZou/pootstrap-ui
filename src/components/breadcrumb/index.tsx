export interface SeparatorType {
  separator?: React.ReactNode;
  key?: React.Key;
}

export const Breadcrumb = (props: any) => {
  const { prefixCls, children } = props;
  return (
    <div className={`${prefixCls}-breadcrumb flex align-middle`}>
      {children}
    </div>
  );
};

export interface BreadcrumbItemProps extends SeparatorType {
  prefixCls?: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLSpanElement>;
  className?: string;
  children?: React.ReactNode;
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = (
  props: BreadcrumbItemProps
) => {
  const { children, separator = "/", href, prefixCls, ...restProps } = props;
  let link: React.ReactNode;
  if (href !== undefined) {
    link = (
      <a className={`${prefixCls}-link`} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    link = (
      <span className={`${prefixCls}-link`} {...restProps}>
        {children}
      </span>
    );
  }
  return (
    <>
      <li className="breadcrumb-item align-middle list-none cursor-pointer hover:underline hover:bold hover:font-bold hover:text-black text-gray-500">
        {link}
      </li>
      {separator && <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>}
    </>
  );
};

export const BreadcrumbSeparator = (props: any) => {
  const { children } = props;
  return <span className=" text-gray-500 mr-2 ml-2">{children}</span>;
};
