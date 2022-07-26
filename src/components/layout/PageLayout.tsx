import classes from './PageLayout.module.css';

const PageLayout = ({ children }: { children: any }) => {
  return <main className={[classes.main, 'container'].join(' ')}>{children}</main>;
};

export default PageLayout;
