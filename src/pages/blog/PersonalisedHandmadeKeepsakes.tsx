import React from 'react';
import { Link } from 'react-router-dom';

export function WhyPoppasWoodenCreationsAreBest() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-gray-500">
            <li><Link to="/" className="hover:text-amber-600">Home</Link></li>
            <li>→</li>
            <li><Link to="/blog" className="hover:text-amber-600">Blog</Link></li>
            <li>→</li>
            <li className="text-gray-900">Handcrafted in Whangārei</li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Handcrafted in Whangārei: Why Poppa's Wooden Creations Are the Best Sustainable Toys for Your Toddler
          </h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <time dateTime="2025-11-13">November 13, 2025</time>
            <span className="mx-3">•</span>
            <span>12 min read</span>
          </div>
          
          {/* REPLACE THIS IMAGE URL WITH YOUR OWN PRODUCT IMAGE */}
          <img 
            src="https://i.ibb.co/YypC5fD/wooden-toys-hero.jpg" 
            alt="Handcrafted wooden toys from Poppa's Wooden Creations in Whangārei"
            className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
          />
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Are you a parent searching for toys that are not only safe and engaging for your child but also kind to the planet? 
            In a world saturated with disposable plastic, finding truly <strong>sustainable wooden toys</strong> can feel like 
            searching for a hidden gem.
          </p>

          <p className="mb-6">
            That gem is found right here in Northland. <strong>Poppa's Wooden Creations</strong>, based in <strong>Whangārei</strong>, 
            crafts beautiful, heirloom-quality wooden toys that tick every box for the conscious parent—from premium materials to 
            a "child-safe" finish.
          </p>

          <p className="mb-6">
            Here is a deep dive into what makes this local workshop a standout choice for your family.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            The E-E-A-T of Kiwi Craftsmanship: Meet the Maker in Whangārei
          </h2>

          <p className="mb-4">
            When you choose a handmade item, you are choosing quality rooted in <strong>Experience, Expertise, Authoritativeness, 
            and Trustworthiness (E-E-A-T)</strong>. Since being established in 2015, Poppa's Wooden Creations has built a reputation 
            for crafting unique, durable toys right here in New Zealand.
          </p>

          <p className="mb-4">
            The expertise is clear in every hand-sanded detail.
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Location:</strong> The workshop is located at 102 Kiripaka Rd, <strong>Whangārei</strong>, Northland 0110.</li>
            <li><strong>Reviews:</strong> With over 150 reviews averaging 4.9/5 stars, the community trust is strong.</li>
            <li><strong>The Maker's Philosophy:</strong> Every piece is designed to foster imaginative, screen-free play and be robust 
            enough to be passed down through families—a true commitment to sustainability.</li>
          </ul>

          <p className="mb-6">
            This isn't just another online shop; it's a <strong>local artisan</strong> dedicated to a craft. For those looking to 
            <strong> buy wooden toys in Whangārei</strong>, supporting this local, registered NZ business means investing directly 
            in quality and community.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            Heirloom Quality: The Sustainable Choice for Eco-Friendly Play
          </h2>

          <p className="mb-4">
            The foundation of a great wooden toy is the wood itself. Poppa's Wooden Creations uses a premium selection of 
            <strong> New Zealand native timbers</strong> that are durable, beautiful, and distinct.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
            Materials That Last for Generations:
          </h3>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Kauri:</strong> Revered for its rich, warm tones and historical significance, Kauri creates beautiful and 
            highly valuable heirloom pieces.</li>
            <li><strong>Rimu:</strong> Known for its striking grain patterns, Rimu offers both beauty and exceptional durability 
            for toys like the popular wooden train sets and cars.</li>
            <li><strong>Macrocarpa:</strong> A popular timber for its resilience and pleasant aroma.</li>
            <li><em>Note: While premium native timbers are a focus, some items also use durable pine to offer more accessible 
            price points to buyers.</em></li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
            Commitment to Child-Safe Finishes:
          </h3>

          <p className="mb-6">
            For <strong>parents looking for sustainable toys</strong>, the finish is just as important as the wood. All pieces 
            are hand-sanded to a silky-smooth finish and coated exclusively with <strong>child-safe, non-toxic materials</strong>. 
            This ensures the toys are safe for little hands (and mouths!) while remaining genuinely <strong>eco-friendly toys 
            Whangārei</strong> can be proud of.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            A Toy for Every Stage: Developing Skills with Unique Wooden Toys
          </h2>

          <p className="mb-4">
            The range of products extends far beyond simple blocks, making them highly effective <strong>handmade educational 
            toys</strong>. The entire collection encourages fine motor skills, spatial reasoning, and creative storytelling.
          </p>

          {/* Table */}
          <div className="overflow-x-auto my-8">
            <table className="min-w-full divide-y divide-gray-300 border border-gray-300">
              <thead className="bg-amber-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-r border-gray-300">
                    Toy Category
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-r border-gray-300">
                    Target Audience
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                    Developmental Focus
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 border-r border-gray-300">
                    <strong>Wooden Baby Toys</strong>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 border-r border-gray-300">
                    Infants & Toddlers
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Gripping, tactile exploration, sensory input
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 border-r border-gray-300">
                    Trucks, Cars, & Planes
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 border-r border-gray-300">
                    Preschoolers
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Imaginative play, storytelling, motor control
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 border-r border-gray-300">
                    Wooden Trains & Boats
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 border-r border-gray-300">
                    All ages
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Linking, construction, problem-solving
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 border-r border-gray-300">
                    Wooden Kitchenware
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 border-r border-gray-300">
                    Role Play
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Social skills, mimicking, dramatic play
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-6">
            If you are looking for <strong>wooden puzzles Whangārei</strong> locals rely on, or even just high-quality 
            <strong> handmade toys for toddlers</strong>, the extensive category list (including everything from Tractors 
            to Kitchenware) ensures there is a perfect item for your child's stage of development.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            How to Buy Wooden Toys in Whangārei (and Beyond)
          </h2>

          <p className="mb-4">
            Ready to bring one of these unique, handcrafted pieces into your home?
          </p>

          <ol className="list-decimal pl-6 mb-6 space-y-3">
            <li><strong>Shop Local in Whangārei:</strong> As a local artisan, you can support the business directly.</li>
            <li><strong>Shop Online:</strong> Visit the website at <a href="https://poppaswoodencreations.co.nz/" 
            className="text-amber-600 hover:text-amber-700 font-semibold" target="_blank" rel="noopener noreferrer">
            https://poppaswoodencreations.co.nz/</a>. The site is secure and easy to navigate, allowing you to browse 
            all the categories of <strong>custom wooden toys NZ</strong> has to offer.</li>
            <li><strong>Shipping:</strong> Poppa's Wooden Creations offers shipping across New Zealand, making these 
            <strong> locally made wooden toys</strong> accessible whether you're in Northland or down south. 
            <em>(Note: Free Shipping is offered on orders over $1000 NZD.)</em></li>
          </ol>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 my-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Experience the Difference of Handcrafted Quality
            </h3>
            <p className="text-gray-700 mb-6">
              Every toy from Poppa's Wooden Creations is handcrafted with care in our Whangārei workshop using 
              sustainable New Zealand timber. Each piece tells a story and is built to become a cherished family heirloom.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/wooden-trucks" 
                className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors inline-block"
              >
                Browse Our Collection
              </Link>
              <Link 
                to="/contact" 
                className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold border-2 border-amber-600 hover:bg-amber-50 transition-colors inline-block"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What makes Poppa's Wooden Creations different from other toy makers?
              </h3>
              <p className="text-gray-700">
                We're a local Whangārei artisan workshop using premium NZ native timbers like Kauri, Rimu, and Macrocarpa. 
                Each toy is handcrafted with child-safe finishes and designed to last for generations.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Are your toys safe for young children?
              </h3>
              <p className="text-gray-700">
                Absolutely! All our toys are hand-sanded to a silky-smooth finish and coated exclusively with child-safe, 
                non-toxic materials. They're designed for little hands and mouths.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Do you offer shipping throughout New Zealand?
              </h3>
              <p className="text-gray-700">
                Yes! We ship nationwide across New Zealand, and offer free shipping on orders over $1000 NZD.
              </p>
            </div>
          </div>
        </div>

        {/* Author Bio */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-16 w-16 bg-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">P</span>
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-bold text-gray-900">Poppa's Wooden Creations</h4>
              <p className="text-gray-600">
                Handcrafting quality wooden toys in Whangārei, New Zealand since 2015. 
                Specializing in safe, sustainable, heirloom-quality toys made from NZ native timbers.
              </p>
            </div>
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-12 text-center">
          <Link 
            to="/blog"
            className="text-amber-600 hover:text-amber-700 font-semibold inline-flex items-center"
          >
            ← Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
