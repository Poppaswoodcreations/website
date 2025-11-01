import React from 'react';
import { Link } from 'react-router-dom';

export function BenefitsOfWoodenToys() {
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
            <li className="text-gray-900">Benefits of Wooden Toys</li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            5 Benefits of Wooden Toys for Child Development: A New Zealand Parent's Guide
          </h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <time dateTime="2025-11-01">November 1, 2025</time>
            <span className="mx-3">•</span>
            <span>8 min read</span>
          </div>
          
          <img 
            src="https://i.ibb.co/zVP9hTH1/teething-ring.jpg" 
            alt="Handcrafted wooden teething rings by Poppa's Wooden Creations"
            className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
          />
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            As a parent in New Zealand, choosing the right toys for your child can feel overwhelming. 
            Walk into any toy store and you'll find aisles of bright, battery-powered plastic toys 
            promising to entertain and educate. But there's growing evidence that simple wooden toys 
            might be the better choice for your child's development.
          </p>

          <p className="mb-6">
            At Poppa's Wooden Creations, we've spent years crafting wooden toys in our Whangarei 
            workshop. We've seen firsthand how children engage differently with wooden toys compared 
            to their plastic counterparts. In this guide, we'll explore five key benefits of wooden 
            toys and why they deserve a place in your child's playroom.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Answer</h3>
            <p className="text-gray-700 mb-0">
              Wooden toys offer significant developmental benefits: they enhance fine motor skills 
              through hands-on manipulation, encourage creative and imaginative play, provide safer 
              non-toxic materials, last for generations reducing waste, and support sensory development 
              through natural textures and weight.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            1. Wooden Toys Develop Fine Motor Skills Better Than Electronic Toys
          </h2>

          <p className="mb-4">
            Fine motor skills—the coordination of small muscles in hands and fingers—are crucial for 
            your child's development. These skills lay the foundation for everything from writing to 
            buttoning clothes to using utensils.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
            Why wooden toys excel:
          </h3>

          <p className="mb-4">
            Wooden toys require active manipulation. Unlike battery-powered toys that move, light up, 
            or make sounds on their own, wooden toys only do what your child makes them do. This means 
            more hands-on engagement.
          </p>

          <p className="mb-2">When a toddler stacks wooden blocks, they're:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Developing hand-eye coordination</li>
            <li>Strengthening finger and wrist muscles</li>
            <li>Learning spatial awareness</li>
            <li>Practicing precision and control</li>
          </ul>

          <p className="mb-6">
            <strong>Real-world example:</strong> A simple wooden puzzle requires a child to grip pieces 
            (pincer grasp), rotate them to find the right orientation (wrist rotation), and place them 
            precisely (hand-eye coordination). An electronic puzzle that lights up when pieces are near 
            the right spot? It's doing half the work for them.
          </p>

          {/* ⭐ YOUR BABY RATTLE IMAGE */}
          <div className="my-8">
            <img 
              src="https://i.ibb.co/Pdb63cf/baby-rattle.jpg" 
              alt="Handcrafted wooden baby rattles made in New Zealand by Poppa's Wooden Creations"
              className="w-full rounded-lg shadow-md"
            />
            <p className="text-sm text-gray-500 mt-2 text-center italic">
              Our handcrafted wooden rattles - perfect for developing fine motor skills and sensory exploration
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            2. They Encourage Creative and Imaginative Play
          </h2>

          <p className="mb-4">
            Have you noticed how the most expensive electronic toy often gets abandoned after a few days, 
            while simple wooden blocks keep children engaged for hours?
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
            The "open-ended play" advantage:
          </h3>

          <p className="mb-4">
            Wooden toys are beautifully simple. A wooden block can be a phone, a car, a building, 
            a bridge, or whatever your child imagines. This open-ended nature encourages creative 
            thinking and problem-solving.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            3. Wooden Toys Are Safer for Children
          </h2>

          <p className="mb-4">
            As New Zealand parents, we're rightfully concerned about toy safety. Wooden toys offer 
            several safety advantages over plastic alternatives.
          </p>

          <p className="mb-2"><strong>Non-toxic and chemical-free:</strong></p>
          <p className="mb-4">
            Many plastic toys contain BPA, phthalates, PVC, and lead in painted surfaces. Wooden toys 
            finished with food-safe oils eliminate these concerns.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            4. Wooden Toys Are Sustainable and Teach Environmental Responsibility
          </h2>

          <p className="mb-4">
            Plastic toys end up in landfills within 6 months on average. Wooden toys last for 
            generations, teaching children about sustainability and environmental stewardship.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            5. They Provide Better Sensory Experiences
          </h2>

          <p className="mb-4">
            Wood has natural grain patterns, warmth to the touch, pleasing weight, and subtle 
            wood scent—all providing richer sensory experiences than plastic alternatives.
          </p>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 my-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Explore Wooden Toys?
            </h3>
            <p className="text-gray-700 mb-6">
              At Poppa's Wooden Creations, we handcraft every toy in our Whangarei workshop using 
              sustainable New Zealand timber and non-toxic finishes. Each piece is made with care, 
              designed for safety, and built to last for generations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/wooden-trains" 
                className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors inline-block"
              >
                Browse Our Collection
              </Link>
              <Link 
                to="/contact" 
                className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold border-2 border-amber-600 hover:bg-amber-50 transition-colors inline-block"
              >
                Contact Us
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
                Are wooden toys safe for babies who are teething?
              </h3>
              <p className="text-gray-700">
                Yes! Wooden teething toys made with food-safe finishes are excellent for teething babies. 
                Wood is naturally antibacterial and provides the right firmness for gum relief.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How do I clean wooden toys?
              </h3>
              <p className="text-gray-700">
                Wipe with a damp cloth and mild soap if needed. Dry immediately. Don't soak or put in 
                the dishwasher, as this can damage the wood.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Why are wooden toys more expensive than plastic toys?
              </h3>
              <p className="text-gray-700">
                Wooden toys cost more upfront because they're made from quality materials and often 
                handcrafted. However, they last for years (often decades), making them more economical 
                over time.
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
                Handcrafting quality wooden toys in Whangarei, New Zealand. 
                Specializing in safe, sustainable, educational toys for children.
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
