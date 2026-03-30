"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Phone } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeLargeTitles"
        background="grid"
        cardStyle="layered-gradient"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "Services",          id: "services"},
        {
          name: "Reviews",          id: "testimonials"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Canadian Barber Shop"
      button={{
        text: "Call Now",        href: "tel:+14034572857"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated"}}
      title="Top-Rated Barber Shop in Calgary"
      description="4.9⭐ from 240+ satisfied clients. Experience elite grooming from the city's finest professionals."
      buttons={[
        {
          text: "Call Now",          href: "tel:+14034572857"},
        {
          text: "Get Directions",          href: "https://maps.app.goo.gl/example"},
      ]}
      carouselItems={[
        { id: "1", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BeB4KIkmM6dj3qCLc61hRyv1Y1/uploaded-1774844132744-sx7dc5ej.jpg", imageAlt: "Luxurious barbershop interior" },
        { id: "2", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BeB4KIkmM6dj3qCLc61hRyv1Y1/action-shot-of-a-professional-barber-tri-1774842781119-37e56971.png", imageAlt: "Barber performing beard trim" },
        { id: "3", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BeB4KIkmM6dj3qCLc61hRyv1Y1/barber-using-professional-clippers-on-a--1774842781349-afcd469c.png", imageAlt: "Barber cutting hair" },
        { id: "4", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BeB4KIkmM6dj3qCLc61hRyv1Y1/uploaded-1774844132744-vxdc9rdi.jpg", imageAlt: "Premium grooming tools" },
        { id: "5", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BeB4KIkmM6dj3qCLc61hRyv1Y1/wide-interior-shot-of-a-clean-premium-ba-1774842782421-60086dfb.png?_wi=1", imageAlt: "Barbershop interior design" },
        { id: "6", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BeB4KIkmM6dj3qCLc61hRyv1Y1/close-up-shot-of-a-sharp-fade-haircut-fi-1774842781322-abf77f9f.png", imageAlt: "Final haircut result" }
      ]}
      autoPlay={true}
      autoPlayInterval={4000}
      ariaLabel="Hero section"
    />
  </div>

  <div id="services" data-section="services">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "s1",          badge: "Popular",          price: "$35",          subtitle: "Precision Haircut",          features: [
            "Consultation",            "Expert Cut",            "Hot Towel Finish"],
          buttons: [
            {
              text: "Call to Book",              href: "tel:+14034572857"},
          ],
        },
        {
          id: "s2",          badge: "Standard",          price: "$25",          subtitle: "Beard Trim",          features: [
            "Beard Shaping",            "Razor Lineup",            "Beard Oil Application"],
          buttons: [
            {
              text: "Call to Book",              href: "tel:+14034572857"},
          ],
        },
        {
          id: "s3",          badge: "Premium",          price: "$55",          subtitle: "Full Styling",          features: [
            "Haircut & Wash",            "Beard Sculpting",            "Style Advice"],
          buttons: [
            {
              text: "Call to Book",              href: "tel:+14034572857"},
          ],
        },
      ]}
      title="Our Services"
      description="Premium grooming experiences tailored to your style."
      ariaLabel="Pricing section"
    />
  </div>

  <div id="why-us" data-section="why-us">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="Why Choose Canadian Barber Shop?"
      description="We are committed to excellence, providing a welcoming environment and unmatched expertise in all hair textures."
      metrics={[
        {
          value: "10+",          title: "Years Experience"},
        {
          value: "240+",          title: "5-Star Reviews"},
        {
          value: "100%",          title: "Client Satisfaction"},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BeB4KIkmM6dj3qCLc61hRyv1Y1/wide-interior-shot-of-a-clean-premium-ba-1774842782421-60086dfb.png?_wi=2"
      imageAlt="Barbershop interior"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
      ariaLabel="About section"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="Best haircut I've had in Calgary! The team is incredibly talented, professional, and they take the time to get the style exactly right. Highly recommend!"
      rating={5}
      author="Mark Smith"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-optimistic-businessman-formalwear_1262-3600.jpg",          alt: "Customer Mark"},
        {
          src: "http://img.b2bpic.net/free-photo/studio-portrait-beautiful-young-man-posing_1301-5142.jpg",          alt: "Customer John"},
        {
          src: "http://img.b2bpic.net/free-photo/front-view-smiley-man-posing_23-2149438536.jpg",          alt: "Customer Alex"},
        {
          src: "http://img.b2bpic.net/free-photo/professional-barber-working-with-client-hairdressing-salon-styling-beard-with-trimmer_613910-18291.jpg",          alt: "Customer David"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-optimistic-businessman-formalwear_1262-3600.jpg",          alt: "Customer Sam"},
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
      ariaLabel="Testimonial section"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactFaq
      animationType="slide-up"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",          title: "Where are you located?",          content: "6546 4 St NE, Calgary, AB"},
        {
          id: "2",          title: "What are your hours?",          content: "Mon-Fri: 9am-7pm, Sat: 10am-5pm, Sun: Closed"},
        {
          id: "3",          title: "Do you accept walk-ins?",          content: "Yes, walk-ins are welcome, but appointments are recommended for guaranteed service."},
      ]}
      ctaTitle="Book Your Seat Today"
      ctaDescription="Get the best grooming experience in Calgary. Call us now to secure your spot!"
      ctaButton={{
        text: "Call Now (+1 403-457-2857)",        href: "tel:+14034572857"}}
      ctaIcon={Phone}
      ariaLabel="Contact and FAQ section"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Services",          items: [
            {
              label: "Haircut",              href: "#services"},
            {
              label: "Beard Trim",              href: "#services"},
          ],
        },
        {
          title: "Contact",          items: [
            {
              label: "Call Us",              href: "tel:+14034572857"},
            {
              label: "Directions",              href: "https://maps.app.goo.gl/example"},
          ],
        },
      ]}
      bottomLeftText="© 2024 Canadian Barber Shop & Hair Styling. All rights reserved."
      bottomRightText="6546 4 St NE, Calgary, AB"
      ariaLabel="Site footer"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}