
import React from 'react';
import { Link } from 'react-router-dom';

export function BestWoodenToysByAge() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-8">
          <ol className="flex items-center space-x-2 text-gray-500">
            <li><Link to="/" className="hover:text-amber-600">Home</Link></li>
            <li>→</li>
            <li><Link to="/blog" className="hover:text-amber-600">Blog</Link></li>
            <li>→</li>
            <li className="text-gray-900">Best Wooden Toys by Age</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Best Wooden Toys for Different Ages: Complete 0-5 Years Guide
          </h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <time dateTime="2025-11-15">November 15, 2025</time>
            <span className="mx-3">•</span>
            <span>10 min read</span>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1587070163926-eb9c93d2b3c4?w=1200&q=80" 
            alt="Various wooden toys for different ages"
            className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
          />
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Choosing the right wooden toys for your child's age isn't just about safety—it's about 
            supporting their developmental milestones at exactly the right time.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            0-6 Months: Sensory Exploration
          </h2>

          <p className="mb-4">
            <strong>Developmental Focus:</strong> Sensory development, visual tracking, grasping reflex
          </p>

          <div className="bg-amber-50 p-6 rounded-lg mb-6">
            <h4 className="font-bold text-lg mb-2">Best Toys for This Age:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Wooden Rattles:</strong> Simple to grasp, introduces cause-and-effect</li>
              <li><strong>Wooden Ring Teethers:</strong> Safe for mouthing, provides gum relief</li>
              <li><strong>High-Contrast Toys:</strong> Stimulates visual development</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            6-12 Months: Discovery Phase
          </h2>

          <p className="mb-4">
            <strong>Developmental Focus:</strong> Sitting, crawling, pulling up, pincer grasp
          </p>

          <div className="bg-amber-50 p-6 rounded-lg mb-6">
            <h4 className="font-bold text-lg mb-2">Best Toys for This Age:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Stacking Rings:</strong> Perfect for practicing pincer grasp</li>
              <li><strong>Simple Puzzles (2-4 pieces):</strong> Introduces problem-solving</li>
              <li><strong>Push-Pull Toys:</strong> Encourages crawling and walking</li>
              <li><strong>Large Wooden Blocks:</strong> Endless exploration possibilities</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            1-2 Years: Mobile Explorers
          </h2>

          <p className="mb-4">
            <strong>Developmental Focus:</strong> Walking confidently, vocabulary explosion, beginning pretend play
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Pull-Along Animals</h4>
              <p className="text-sm">Encourages walking and provides play companionship</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Shape Sorters</h4>
              <p className="text-sm">Perfect challenge for problem-solving skills</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Wooden Vehicles</h4>
              <p className="text-sm">Great for imaginative "vroom vroom" play</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Stacking & Nesting Toys</h4>
              <p className="text-sm">Multiple ways to play and learn</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            2-3 Years: Imagination Explosion
          </h2>

          <p className="mb-4">
            Two-year-olds have rich imaginations and love imitating adults.
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Wooden Kitchen Set:</strong> Perfect for imitating parents</li>
            <li><strong>Train Set:</strong> Encourages planning and storytelling</li>
            <li><strong>Building Blocks (50+ pieces):</strong> Complex building now possible</li>
            <li><strong>Dollhouse:</strong> Acting out family scenarios</li>
            <li><strong>Musical Instruments:</strong> Exploring sounds and rhythm</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            3-4 Years: Complex Building
          </h2>

          <p className="mb-4">
            Preschoolers engage in complex activities and cooperative play.
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Advanced Building Sets:</strong> Large imaginative structures</li>
            <li><strong>12-24 Piece Puzzles:</strong> Builds confidence and concentration</li>
            <li><strong>Balance Board:</strong> Develops core strength</li>
            <li><strong>Lacing Toys:</strong> Pre-writing fine motor skills</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">
            4-5 Years: School Readiness
          </h2>

          <p className="mb-4">
            Children prepare for formal schooling with complex activities.
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Alphabet & Number Sets:</strong> Hands-on learning</li>
            <li><strong>Advanced Puzzles (24-48 pieces):</strong> Concentration practice</li>
            <li><strong>Construction Kits:</strong> Real mechanical concepts</li>
            <li><strong>Board Games:</strong> Rule-following and turn-taking</li>
          </ul>

          {/* Shopping Checklist */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 my-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Shopping Checklist</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-lg mb-2">For 0-6 Months:</h4>
                <ul className="text-sm space-y-1">
                  <li>☐ 2-3 wooden rattles</li>
                  <li>☐ 1 wooden teething ring</li>
                  <li>☐ 1 high-contrast toy</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">For 6-12 Months:</h4>
                <ul className="text-sm space-y-1">
                  <li>☐ Stacking rings</li>
                  <li>☐ Simple 2-3 piece puzzle</li>
                  <li>☐ 10-15 large wooden blocks</li>
                  <li>☐ 1 push or pull toy</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">For 1-2 Years:</h4>
                <ul className="text-sm space-y-1">
                  <li>☐ Pull-along animal</li>
                  <li>☐ Shape sorter</li>
                  <li>☐ 3-4 simple vehicles</li>
                  <li>☐ Stacking/nesting toys</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">For 2-3 Years:</h4>
                <ul className="text-sm space-y-1">
                  <li>☐ Kitchen set with play food</li>
                  <li>☐ Basic train set</li>
                  <li>☐ 50+ unit blocks</li>
                  <li>☐ Simple dollhouse</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 my-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Find Age-Appropriate Toys for Your Child
            </h3>
            <p className="text-gray-700 mb-6">
              Browse our collection of handcrafted wooden toys, perfect for every developmental stage.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/wooden-baby-toys" 
                className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors inline-block"
              >
                Shop Baby Toys
              </Link>
              <Link 
                to="/wooden-trains" 
                className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold border-2 border-amber-600 hover:bg-amber-50 transition-colors inline-block"
              >
                Shop All Toys
              </Link>
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
