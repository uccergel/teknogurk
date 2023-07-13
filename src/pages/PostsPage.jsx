export default function PostsPage() {
  return (
    <>
      <h2 className="mx-auto font-medium text-xl text-center mb-10 mt-10">
        Bilgi Paylaşmak İçindir...
      </h2>
      <div>
        <img
          src="/homepageimage.jpg"
          alt="anasayfa-görsel"
          className="rounded-xl"
        />
        <p className="text-center">
          Photo by{' '}
          <a
            className="hover:text-gray-600"
            href="https://unsplash.com/fr/@kathymack?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >
            Katherine McCormack{' '}
          </a>
          on{' '}
          <a
            className="hover:text-gray-600"
            href="https://unsplash.com/photos/j1egA73qp7c?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >
            Unsplash
          </a>
        </p>
      </div>
    </>
  )
}
