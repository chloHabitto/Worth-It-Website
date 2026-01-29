import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-12 max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <article className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground">
          <h1 className="text-3xl font-serif text-foreground mb-2">
            Privacy Policy
          </h1>

          {/* 1. Introduction */}
          <section className="mb-10">
            <h2 className="text-xl font-serif text-foreground mt-8 mb-4">
              1. Introduction
            </h2>
            <p>
              This Privacy Policy applies to <strong>Worth It?</strong> (“App”),
              developed by Worth It? (“we,” “our,” or “us”). This policy is
              effective as of <strong>January 29, 2026</strong> and describes
              how we handle information in connection with the App. It covers
              what data the App may access, how it is stored, and your rights
              regarding your information.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section className="mb-10">
            <h2 className="text-xl font-serif text-foreground mt-8 mb-4">
              2. Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>User-generated content: memories, notes, ratings, emotional tags</li>
              <li>Profile information: display name, profile photo (optional)</li>
              <li>Usage timestamps: when entries are created/modified</li>
              <li>Device identifiers: for iCloud sync functionality</li>
            </ul>
          </section>

          {/* 3. How We Store Your Data */}
          <section className="mb-10">
            <h2 className="text-xl font-serif text-foreground mt-8 mb-4">
              3. How We Store Your Data
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Local device storage via SwiftData</li>
              <li>iCloud sync to your private iCloud account (Apple's servers)</li>
              <li>
                We do <strong>NOT</strong> have access to your data—it's stored
                in <strong>YOUR</strong> iCloud
              </li>
            </ul>
          </section>

          {/* 4. How We Use Your Data */}
          <section className="mb-10">
            <h2 className="text-xl font-serif text-foreground mt-8 mb-4">
              4. How We Use Your Data
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>To provide core app functionality</li>
              <li>To sync across your devices via iCloud</li>
              <li>We do <strong>NOT</strong> use data for advertising</li>
              <li>We do <strong>NOT</strong> sell or share data with third parties</li>
            </ul>
          </section>

          {/* 5. Data Sharing */}
          <section className="mb-10">
            <h2 className="text-xl font-serif text-foreground mt-8 mb-4">
              5. Data Sharing
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>We do <strong>NOT</strong> share your data with third parties</li>
              <li>Data syncs only to your personal iCloud account</li>
              <li>No analytics services collect your content</li>
            </ul>
          </section>

          {/* 6. Data Security */}
          <section className="mb-10">
            <h2 className="text-xl font-serif text-foreground mt-8 mb-4">
              6. Data Security
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Data encrypted on device</li>
              <li>iCloud data protected by Apple's security</li>
              <li>Optional App Lock with PIN/Face ID</li>
            </ul>
          </section>

          {/* 7. Your Rights & Controls */}
          <section className="mb-10">
            <h2 className="text-xl font-serif text-foreground mt-8 mb-4">
              7. Your Rights & Controls
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Export all data as JSON</li>
              <li>Delete individual memories</li>
              <li>Clear all data from settings</li>
              <li>Hide sensitive memories</li>
              <li>Manage iCloud sync in device settings</li>
            </ul>
          </section>

          {/* 8. Children's Privacy */}
          <section className="mb-10">
            <h2 className="text-xl font-serif text-foreground mt-8 mb-4">
              8. Children's Privacy
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>App not directed at children under 13</li>
              <li>We don't knowingly collect data from children</li>
            </ul>
          </section>

          {/* 9. Changes to This Policy */}
          <section className="mb-10">
            <h2 className="text-xl font-serif text-foreground mt-8 mb-4">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any material changes by posting the updated policy
              in the App and/or by email if you have provided your contact
              information. The “Effective date” at the top will be updated when
              changes are made. Your continued use of the App after changes
              constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* 10. Contact Information */}
          <section className="mb-10">
            <h2 className="text-xl font-serif text-foreground mt-8 mb-4">
              10. Contact Information
            </h2>
            <p>
              For privacy-related questions or requests, please contact us at:{" "}
              <a
                href="mailto:chloe@habitto.nl"
                className="text-primary hover:underline"
              >
                chloe@habitto.nl
              </a>
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
