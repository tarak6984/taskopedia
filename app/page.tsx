import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import MotionSection, { MotionStagger, MotionStaggerItem } from './components/MotionSection';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden w-full">
      <ScrollProgress />
      <Navbar />
      <Hero />

      {/* Why Bangladesh Section */}
      <section id="why-bangladesh" className="px-6 py-20 max-w-6xl mx-auto">
        <MotionSection animation="fade" delay={200}>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Why Bangladesh?
          </h2>
        </MotionSection>
        
        <MotionSection animation="slide-up" delay={300}>
          <div className="frost rounded-2xl p-8 md:p-12 mb-12 hover-lift">
          <h3 className="text-3xl font-bold mb-6 text-orange">
            A Young, Vibrant & English‑Speaking Workforce
          </h3>
          <p className="text-lg mb-8 leading-relaxed">
            Bangladesh is home to one of the youngest and fastest‑growing talent pools in the world. 
            Each year, thousands of university‑educated professionals enter the workforce with strong 
            English communication skills and a global mindset.
          </p>
          <p className="text-xl font-semibold mb-4">Why global companies choose Bangladesh:</p>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="text-orange mr-3">▸</span>
              Strong written and spoken English
            </li>
            <li className="flex items-start">
              <span className="text-orange mr-3">▸</span>
              Digital‑first, tech‑savvy professionals
            </li>
            <li className="flex items-start">
              <span className="text-orange mr-3">▸</span>
              Cultural adaptability to international teams
            </li>
            <li className="flex items-start">
              <span className="text-orange mr-3">▸</span>
              Competitive costs without compromising quality
            </li>
          </ul>
          </div>
        </MotionSection>

        <MotionSection animation="slide-up" delay={400}>
          <div className="frost rounded-2xl p-8 md:p-12 hover-lift">
          <h3 className="text-3xl font-bold mb-6 text-orange">
            A Global Freelancing Powerhouse - Ready for Stability
          </h3>
          <p className="text-lg mb-8 leading-relaxed">
            Bangladesh is already one of the world&apos;s leading freelancing hubs, producing experts 
            across design, development, marketing, operations, and customer support.
          </p>
          <p className="text-xl font-semibold mb-4">However, traditional freelancing often lacks:</p>
          <ul className="space-y-3 text-lg mb-8">
            <li className="flex items-start">
              <span className="text-orange mr-3">▸</span>
              Income stability
            </li>
            <li className="flex items-start">
              <span className="text-orange mr-3">▸</span>
              Long‑term commitment
            </li>
            <li className="flex items-start">
              <span className="text-orange mr-3">▸</span>
              Career progression
            </li>
          </ul>
          <p className="text-lg leading-relaxed">
            <span className="font-semibold text-orange">taskopedia</span> bridges this gap by 
            transforming top freelancers into reliable, long‑term remote team members for 
            international companies and private clients.
          </p>
          </div>
        </MotionSection>
      </section>

      {/* What We Do Section */}
      <section id="services" className="px-6 py-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-6xl mx-auto">
          <MotionSection animation="fade">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              What We Do
            </h2>
          </MotionSection>
          
          <MotionStagger className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Service 1 */}
            <MotionStaggerItem className="h-full">
            <div className="frost rounded-2xl p-8 hover-lift h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-orange">
                Offshore Recruitment & Long‑Term Placements (B2B)
              </h3>
              <p className="text-lg mb-6 leading-relaxed">
                We recruit, vet, and place dedicated Bangladeshi professionals directly into your business.
              </p>
              <p className="font-semibold mb-3">Our end‑to‑end service includes:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-orange mr-2">•</span>
                  Talent sourcing & screening
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">•</span>
                  Skill and English proficiency assessment
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">•</span>
                  Interview coordination
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">•</span>
                  Contracts, payroll & compliance
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">•</span>
                  Ongoing performance and HR support
                </li>
              </ul>
              <p className="font-semibold mb-3">Popular roles include:</p>
              <ul className="space-y-2 mb-6">
                <li>- Virtual Assistants & Admin Support</li>
                <li>- Digital Marketing Specialists</li>
                <li>- Graphic Designers & Content Creators</li>
                <li>- Developers & Technical Support</li>
                <li>- Customer Service & Sales Professionals</li>
              </ul>
              <p className="text-orange font-semibold">
                You get committed team members - not short‑term freelancers.
              </p>
            </div>
            </MotionStaggerItem>

            {/* Service 2 */}
            <MotionStaggerItem className="h-full">
            <div className="frost rounded-2xl p-8 hover-lift h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-orange">
                Managed Freelance & Project Talent (B2B & B2C)
              </h3>
              <p className="text-lg mb-6 leading-relaxed">
                Need flexibility? Taskopedia offers managed freelance solutions for short‑term or 
                project‑based needs.
              </p>
              <p className="font-semibold mb-3">Ideal for:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-orange mr-2">•</span>
                  One‑off projects
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">•</span>
                  Recurring tasks
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">•</span>
                  Part‑time or contract work
                </li>
              </ul>
              <p className="font-semibold mb-3">What makes us different:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-orange mr-2">•</span>
                  Pre‑vetted professionals only
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">•</span>
                  Clear accountability
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">•</span>
                  Quality control & replacement guarantee
                </li>
              </ul>
              <p className="text-orange font-semibold">
                No open marketplaces. No guesswork. Just reliable results.
              </p>
            </div>
            </MotionStaggerItem>

            {/* Service 3 */}
            <MotionStaggerItem className="h-full">
            <div className="frost rounded-2xl p-8 hover-lift h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-orange">
                Dedicated Offshore Teams (B2B)
              </h3>
              <p className="text-lg mb-6 leading-relaxed">
                For fast‑growing companies, taskopedia builds and manages entire offshore teams in Bangladesh.
              </p>
              <p className="font-semibold mb-3">What we provide:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-orange mr-2">•</span>
                  Scalable team structures
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">•</span>
                  Team leads and specialists
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">•</span>
                  Centralised communication
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">•</span>
                  Optional project management
                </li>
              </ul>
              <p className="text-orange font-semibold">
                Perfect for startups, agencies, and SMEs looking to scale efficiently.
              </p>
            </div>
            </MotionStaggerItem>

            {/* Service 4 */}
            <MotionStaggerItem className="h-full">
            <div className="frost rounded-2xl p-8 hover-lift h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-orange">
                Talent Placement for Professionals (B2C)
              </h3>
              <p className="text-lg mb-6 leading-relaxed">
                Taskopedia isn&apos;t just for businesses - we also support professionals seeking 
                stable international careers.
              </p>
              <p className="font-semibold mb-3">We help individuals:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-orange mr-2">•</span>
                  Transition from freelancing to long‑term remote roles
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">•</span>
                  Improve CVs and online profiles
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">•</span>
                  Prepare for interviews
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">•</span>
                  Secure contracts with global clients
                </li>
              </ul>
              <p className="text-orange font-semibold">
                Our goal is to create sustainable careers, not temporary gigs.
              </p>
            </div>
            </MotionStaggerItem>
          </MotionStagger>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-6 py-20 max-w-6xl mx-auto">
        <MotionSection animation="fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            How It Works
          </h2>
        </MotionSection>
        
        <MotionStagger className="grid md:grid-cols-5 gap-6">
          <MotionStaggerItem className="h-full">
            <div className="frost rounded-2xl p-6 text-center hover-lift h-full flex flex-col">
              <div className="text-4xl font-bold text-orange mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Discover</h3>
              <p>We understand your needs, goals, and budget</p>
            </div>
          </MotionStaggerItem>
          <MotionStaggerItem className="h-full">
            <div className="frost rounded-2xl p-6 text-center hover-lift h-full flex flex-col">
              <div className="text-4xl font-bold text-orange mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">Match</h3>
              <p>We source and vet the best‑fit talent</p>
            </div>
          </MotionStaggerItem>
          <MotionStaggerItem className="h-full">
            <div className="frost rounded-2xl p-6 text-center hover-lift h-full flex flex-col">
              <div className="text-4xl font-bold text-orange mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Interview</h3>
              <p>You choose your ideal candidate</p>
            </div>
          </MotionStaggerItem>
          <MotionStaggerItem className="h-full">
            <div className="frost rounded-2xl p-6 text-center hover-lift h-full flex flex-col">
              <div className="text-4xl font-bold text-orange mb-4">4</div>
              <h3 className="text-xl font-bold mb-3">Onboard</h3>
              <p>We handle contracts, payroll, and setup</p>
            </div>
          </MotionStaggerItem>
          <MotionStaggerItem className="h-full">
            <div className="frost rounded-2xl p-6 text-center hover-lift h-full flex flex-col">
              <div className="text-4xl font-bold text-orange mb-4">5</div>
              <h3 className="text-xl font-bold mb-3">Support</h3>
              <p>Ongoing management and performance support</p>
            </div>
          </MotionStaggerItem>
        </MotionStagger>
      </section>

      {/* Why taskopedia Section */}
      <section className="px-6 py-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-6xl mx-auto">
          <MotionSection animation="fade">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              Why taskopedia?
            </h2>
          </MotionSection>
          
          <MotionStagger className="grid md:grid-cols-2 gap-8">
            <MotionStaggerItem className="h-full">
              <div className="frost rounded-2xl p-8 hover-lift h-full flex flex-col">
                <h3 className="text-3xl font-bold mb-6 text-orange">For Businesses</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-orange mr-3 text-2xl">✓</span>
                  Access top English‑speaking talent
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-3 text-2xl">✓</span>
                  Reduce hiring and operational costs
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-3 text-2xl">✓</span>
                  Flexible hiring models
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-3 text-2xl">✓</span>
                  Low‑risk offshore staffing
                </li>
              </ul>
              </div>
            </MotionStaggerItem>
            
            <MotionStaggerItem className="h-full">
              <div className="frost rounded-2xl p-8 hover-lift h-full flex flex-col">
                <h3 className="text-3xl font-bold mb-6 text-orange">For Professionals</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-orange mr-3 text-2xl">✓</span>
                  Stable income
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-3 text-2xl">✓</span>
                  Global exposure
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-3 text-2xl">✓</span>
                  Long‑term career growth
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-3 text-2xl">✓</span>
                  Meaningful international work
                </li>
              </ul>
              </div>
            </MotionStaggerItem>
          </MotionStagger>
        </div>
      </section>

      {/* Vision Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <MotionSection animation="fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Vision</h2>
        </MotionSection>
        <MotionSection animation="scale">
          <div className="frost rounded-2xl p-12 hover-lift">
          <p className="text-xl md:text-2xl leading-relaxed mb-6">
            At <span className="text-orange font-bold">taskopedia.com</span>, we believe the future of work is global.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            By connecting Bangladesh&apos;s immense talent pool with international opportunities, 
            we create long‑term value for businesses and life‑changing careers for professionals.
          </p>
          </div>
        </MotionSection>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 py-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-6xl mx-auto">
          <MotionSection animation="fade">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Pricing</h2>
            <p className="text-2xl text-center mb-16 text-orange">Simple, Transparent Pricing</p>
          </MotionSection>
          
          <MotionStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Long-Term Full-Time */}
            <MotionStaggerItem className="h-full">
              <div className="frost rounded-2xl p-8 hover:border-orange transition-all hover-lift h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-orange">Full-Time Professional</h3>
              <p className="text-sm mb-4 text-gray-400">Long-Term Remote Placements (B2B)</p>
              <div className="text-3xl font-bold mb-6">$800 – $1,500<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-orange mr-2">✓</span>
                  Full-time (40 hrs/week) dedicated staff
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">✓</span>
                  Talent sourcing & vetting
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">✓</span>
                  English & skills assessment
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">✓</span>
                  Payroll & compliance management
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">✓</span>
                  Ongoing HR and performance support
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">✓</span>
                  Replacement guarantee
                </li>
              </ul>
              <p className="text-sm text-gray-400">Final pricing depends on role seniority and experience.</p>
              </div>
            </MotionStaggerItem>

            {/* Part-Time */}
            <MotionStaggerItem className="h-full">
              <div className="frost rounded-2xl p-8 hover:border-orange transition-all hover-lift h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-orange">Part-Time Professional</h3>
              <p className="text-sm mb-4 text-gray-400">Long-Term Remote Placements (B2B)</p>
              <div className="text-3xl font-bold mb-6">$400 – $800<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-orange mr-2">✓</span>
                  20 hrs/week dedicated staff
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">✓</span>
                  Same vetting and support as full-time placements
                </li>
              </ul>
              </div>
            </MotionStaggerItem>

            {/* Hourly Projects */}
            <MotionStaggerItem className="h-full">
              <div className="frost rounded-2xl p-8 hover:border-orange transition-all hover-lift h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-orange">Hourly Projects</h3>
              <p className="text-sm mb-4 text-gray-400">Managed Freelance & Project Work (B2B & B2C)</p>
              <div className="text-3xl font-bold mb-6">$8 – $15<span className="text-lg text-gray-400">/hour</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-orange mr-2">✓</span>
                  Pre-vetted professionals
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">✓</span>
                  Quality assurance
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">✓</span>
                  Clear deliverables
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">✓</span>
                  Replacement if required
                </li>
              </ul>
              </div>
            </MotionStaggerItem>

            {/* Fixed-Price */}
            <MotionStaggerItem className="h-full">
              <div className="frost rounded-2xl p-8 hover:border-orange transition-all hover-lift h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-orange">Fixed-Price Projects</h3>
              <p className="text-sm mb-4 text-gray-400">Managed Freelance & Project Work (B2B & B2C)</p>
              <div className="text-3xl font-bold mb-6">Custom<span className="text-lg text-gray-400"> pricing</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-orange mr-2">✓</span>
                  Based on scope and timeline
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">✓</span>
                  Pre-vetted professionals
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">✓</span>
                  Quality assurance
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">✓</span>
                  Clear deliverables
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">✓</span>
                  Replacement if required
                </li>
              </ul>
              </div>
            </MotionStaggerItem>

            {/* Team Packages */}
            <MotionStaggerItem className="h-full">
              <div className="frost rounded-2xl p-8 hover:border-orange transition-all hover-lift h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-orange">Team Packages</h3>
              <p className="text-sm mb-4 text-gray-400">Dedicated Offshore Teams (B2B)</p>
              <div className="text-3xl font-bold mb-6">From $3,000<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-orange mr-2">✓</span>
                  Multiple specialists + team lead
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">✓</span>
                  Optional project management
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">✓</span>
                  Scalable team structure
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">✓</span>
                  Centralised communication & reporting
                </li>
              </ul>
              </div>
            </MotionStaggerItem>

            {/* Career Placement */}
            <MotionStaggerItem className="h-full">
              <div className="frost rounded-2xl p-8 hover:border-orange transition-all hover-lift h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-orange">Career Placement</h3>
              <p className="text-sm mb-4 text-gray-400">Talent Placement for Professionals (B2C)</p>
              <div className="text-3xl font-bold mb-6">Success-based<span className="text-lg text-gray-400"> or fixed-fee</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-orange mr-2">✓</span>
                  CV & profile optimisation
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">✓</span>
                  Interview preparation
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">✓</span>
                  International employer matching
                </li>
                <li className="flex items-start">
                  <span className="text-orange mr-2">✓</span>
                  Contract guidance
                </li>
              </ul>
              </div>
            </MotionStaggerItem>
          </MotionStagger>

          <MotionSection animation="scale">
            <div className="frost rounded-2xl p-8 mt-12 text-center hover-lift">
            <h3 className="text-2xl font-bold mb-6">Why Our Pricing Works</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-orange text-4xl mb-2">✓</div>
                <p className="font-semibold">No recruitment fees</p>
              </div>
              <div>
                <div className="text-orange text-4xl mb-2">✓</div>
                <p className="font-semibold">No hidden costs</p>
              </div>
              <div>
                <div className="text-orange text-4xl mb-2">✓</div>
                <p className="font-semibold">No long-term lock-in</p>
              </div>
              <div>
                <div className="text-orange text-4xl mb-2">✓</div>
                <p className="font-semibold">Flexible scaling</p>
              </div>
            </div>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="px-6 py-20 max-w-4xl mx-auto text-center">
        <MotionSection animation="fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Get Started</h2>
          <p className="text-xl mb-12 leading-relaxed">
            Whether you&apos;re a company looking to scale or a professional seeking global opportunities, 
            taskopedia is your trusted partner.
          </p>
        </MotionSection>
        <MotionSection animation="scale">
          <a 
            href="#" 
            className="inline-block frost px-10 py-5 rounded-lg text-orange hover:bg-orange hover:text-black transition-all duration-300 font-semibold text-xl mb-4"
          >
            Book a Discovery Call Today
          </a>
          <p className="text-gray-400 text-sm">(Calendly link coming soon)</p>
          <p className="text-2xl font-bold text-orange mt-12">
            Build your global team today.
          </p>
        </MotionSection>
      </section>

      <Footer />
    </div>
  );
}
