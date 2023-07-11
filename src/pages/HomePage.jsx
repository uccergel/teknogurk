export default function HomePage() {
  return (
    <div className="mt-10">
      <h2 className="mb-10 text-center">Bilgi paylaşmak içindir...</h2>
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
    </div>
  )
}
