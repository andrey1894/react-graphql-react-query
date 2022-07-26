import cl from './Loader.module.css';

const Loader = () => {
  return (
    <div className={["spinner-border text-info", cl.loader].join(' ')} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

export default Loader;
