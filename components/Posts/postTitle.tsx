const PostTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <h1 className='text-6xl font-heading sm:text-7xl lg:text-8xl font-black tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left'>
      {children}
    </h1>
  );
};

export default PostTitle;
