import { Link } from "react-router-dom";
import blogs from "../blogs/blogList.json";

const BlogList = () => {
  return (
    <section className="container py-16 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
          Shivaram’s React & Frontend Blogs
        </h1>

        <div className="space-y-6">
          {blogs.map((blog) => (
            <div key={blog.slug} className="border-b border-border pb-4">
              <Link
                to={`/blogs/${blog.slug}`}
                className="text-2xl font-semibold text-primary hover:underline"
              >
                {blog.title}
              </Link>
              <p className="text-sm text-muted-foreground mb-2">{blog.date}</p>
              <p className="text-muted-foreground">{blog.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
