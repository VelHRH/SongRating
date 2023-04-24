const Artist = (props: { children: string }) => {
 const { children } = props;
 return (
  <div
   className={`text-center py-2 bg-gradient-to-tr from-sky-600 to-blue-600 rounded-xl text-white text-xl hover:scale-105 duration-200`}
  >
   {children}
  </div>
 );
};

export default Artist;
