'use client';

import { Container, Grid, Title, Text, Button, Stack, Group, Badge, Box, Paper, Divider } from '@mantine/core';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { IconSearch, IconRocket, IconUsers, IconBriefcase, IconSparkles, IconTrendingUp, IconBrain, IconChartBar, IconFileAnalytics, IconArrowRight, IconCheck, IconStars } from '@tabler/icons-react';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

// Motion wrappers for Mantine components
const MotionDiv = motion.div;

// Floating animation for background elements
const floatingAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// Stagger children animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(180deg, #B7EDFF 0%, #E3F8FF 40%, #F0FFFE 70%, #FFFFFF 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(46, 177, 159, 0.15) 0%, rgba(46, 177, 159, 0) 70%)',
          filter: 'blur(60px)',
          zIndex: 0
        }}
        animate={floatingAnimation}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 194, 210, 0.15) 0%, rgba(99, 194, 210, 0) 70%)',
          filter: 'blur(60px)',
          zIndex: 0
        }}
        animate={{
          y: [0, 20, 0],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      />

      {/* Hero Section */}
      <Container 
        size="xl" 
        py={100}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <motion.div style={{ y, opacity }}>
        <Grid gutter="xl" align="center">
          {/* Left Side - Content */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Stack gap="xl">
                <motion.div variants={itemVariants}>
                  <Group gap="sm" align="center">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                        transition: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      <Box
                        style={{
                          padding: '8px',
                          borderRadius: '12px',
                          background: 'linear-gradient(135deg, #2EB19F 0%, #63C2D2 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 20px rgba(46, 177, 159, 0.3)'
                        }}
                      >
                        <IconSparkles size={20} color="white" stroke={2.5} />
                      </Box>
                    </motion.div>
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 0 0 rgba(46, 177, 159, 0.4)',
                          '0 0 0 10px rgba(46, 177, 159, 0)',
                          '0 0 0 0 rgba(46, 177, 159, 0)'
                        ],
                        transition: {
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      <Badge
                      size="lg"
                      variant="light"
                      color="brand"
                      style={{ 
                        padding: '10px 20px',
                        fontSize: '13px',
                        fontWeight: 800,
                        letterSpacing: '1px',
                        border: '2px solid #2EB19F',
                        background: 'linear-gradient(135deg, rgba(46, 177, 159, 0.15) 0%, rgba(99, 194, 210, 0.15) 100%)',
                        backdropFilter: 'blur(10px)',
                        color: '#1a7a6a'
                      }}
                    >
                      SMART JOB MATCHING PLATFORM
                    </Badge>
                    </motion.div>
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 1, 0.5],
                        transition: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      <Box
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          background: 'radial-gradient(circle, #2EB19F 0%, #63C2D2 100%)',
                          boxShadow: '0 0 10px rgba(46, 177, 159, 0.6)'
                        }}
                      />
                    </motion.div>
                  </Group>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Stack gap="xs">
                    {/* JobSoar Logo Text */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <Title
                        order={1}
                        size={78}
                        fw={900}
                        style={{ 
                          lineHeight: 1,
                          letterSpacing: '-0.03em',
                          marginBottom: '12px'
                        }}
                      >
                        <motion.span
                          style={{
                            background: 'linear-gradient(135deg, #1a8f7a 0%, #2EB19F 30%, #3D9A8B 60%, #63C2D2 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            display: 'inline-block',
                            position: 'relative'
                          }}
                          animate={{
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        >
                          JobSoar
                        </motion.span>
                      </Title>
                    </motion.div>

                    {/* Animated Underline */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '120px' }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      style={{
                        height: '4px',
                        background: 'linear-gradient(90deg, #2EB19F 0%, #63C2D2 100%)',
                        borderRadius: '2px',
                        marginBottom: '16px'
                      }}
                    />

                    {/* Main Tagline with Rotating Text */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      <Title
                        order={1}
                        size={64}
                        fw={900}
                        style={{ 
                          lineHeight: 1.15,
                          letterSpacing: '-0.025em',
                          color: '#0a0a0a',
                          minHeight: '140px'
                        }}
                      >
                        <RotatingText />
                      </Title>
                    </motion.div>
                  </Stack>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Text
                    size="xl"
                    fw={500}
                    c="#3a3a3a"
                    style={{ 
                      lineHeight: 1.7,
                      fontSize: '19px',
                      maxWidth: '540px'
                    }}
                  >
                    Soar to new heights with{' '}
                    <Text component="span" fw={700} c="#2EB19F">
                      intelligent job matching
                    </Text>
                    ,{' '}
                    <Text component="span" fw={700} c="#2EB19F">
                      expert resume analysis
                    </Text>
                    , and{' '}
                    <Text component="span" fw={700} c="#2EB19F">
                      personalized career guidance
                    </Text>
                    . Your dream opportunity is just a click away.
                  </Text>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Group gap="md">
                    <motion.div
                      whileHover={{ 
                        scale: 1.05,
                        y: -4,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                      size="xl"
                      color="brand"
                      leftSection={<IconSearch size={24} />}
                      fw={700}
                      radius="md"
                      style={{ 
                        fontSize: '17px',
                        padding: '16px 32px',
                        height: 'auto',
                        background: 'linear-gradient(135deg, #2EB19F 0%, #3D9A8B 100%)',
                        border: 'none',
                        boxShadow: '0 8px 24px rgba(46, 177, 159, 0.35), 0 2px 8px rgba(0,0,0,0.1)'
                      }}
                    >
                      Find Jobs
                    </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ 
                        scale: 1.05,
                        y: -4,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                      size="xl"
                      variant="outline"
                      color="brand"
                      leftSection={<IconBriefcase size={24} />}
                      fw={700}
                      radius="md"
                      style={{ 
                        fontSize: '17px',
                        padding: '16px 32px',
                        height: 'auto',
                        borderWidth: '2.5px',
                        borderColor: '#2EB19F',
                        color: '#2EB19F'
                      }}
                    >
                      Post a Job
                    </Button>
                    </motion.div>
                  </Group>
                </motion.div>

                {/* Stats with enhanced animation */}
                <motion.div variants={itemVariants}>
                  <Group gap="xl" mt="xl">
                    {[
                      { value: '10,000+', label: 'Active Jobs' },
                      { value: '5,000+', label: 'Companies' },
                      { value: '50,000+', label: 'Job Seekers' }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1, y: -5 }}
                        style={{ cursor: 'pointer' }}
                      >
                        <Stack gap={6}>
                          <Text 
                            size="32px" 
                            fw={900} 
                            c="brand"
                            style={{ letterSpacing: '-0.01em' }}
                          >
                            {stat.value}
                          </Text>
                          <Text size="md" fw={700} c="#4a4a4a" tt="uppercase" style={{ letterSpacing: '0.5px' }}>
                            {stat.label}
                          </Text>
                        </Stack>
                      </motion.div>
                    ))}
                  </Group>
                </motion.div>
              </Stack>
            </motion.div>
          </Grid.Col>

          {/* Right Side - Logo with Advanced Animation */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ x: 100, opacity: 0, rotate: 5 }}
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{ 
                duration: 1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.05,
                rotate: -2,
                transition: { duration: 0.3 }
              }}
              style={{
                position: 'relative',
                width: '100%',
                height: '550px',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 30px 80px rgba(46, 177, 159, 0.25)',
                background: 'linear-gradient(135deg, rgba(46, 177, 159, 0.05) 0%, rgba(99, 194, 210, 0.05) 100%)',
              }}
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                style={{ width: '100%', height: '100%' }}
              >
                <Image
                  src="/Logo.png"
                  alt="Job Portal Hero"
                  fill
                  style={{ objectFit: 'contain', padding: '20px' }}
                  priority
                />
              </motion.div>
            </motion.div>
          </Grid.Col>
        </Grid>
        </motion.div>
      </Container>

      {/* Detailed Features with Images */}
      <Box style={{ position: 'relative', zIndex: 1 }} py={80}>
        <Container size="xl">
          {/* Section Header */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
          >
            <Stack align="center" mb={80}>
              <Title 
                order={2} 
                ta="center" 
                size={56}
                fw={900}
                c="#1a1a1a"
                style={{ letterSpacing: '-0.02em' }}
              >
                Powerful Features
              </Title>
              <Text size="xl" c="#4a4a4a" ta="center" maw={700} fw={600} style={{ fontSize: '20px' }}>
                Everything you need to accelerate your job search and land your dream role
              </Text>
            </Stack>
          </motion.div>

          {/* Feature 1: Smart Job Search */}
          <FeatureSection
            title="Smart Job Search"
            description="Discover opportunities that perfectly match your skills, experience, and career aspirations with our AI-powered search engine."
            features={[
              "Advanced filtering by location, salary, experience level, and job type",
              "Real-time job alerts tailored to your preferences",
              "Save searches and bookmark favorite listings",
              "Instant notifications for new matching opportunities"
            ]}
            imageSrc="/smartJobSearch.png"
            imageAlt="Smart Job Search Interface"
            reversed={false}
            gradient="from-[#2EB19F] to-[#3D9A8B]"
          />

          <Box my={80} />

          {/* Feature 2: AI Resume Analyzer */}
          <FeatureSection
            title="AI Resume Analyzer"
            description="Get instant, professional feedback on your resume. Our AI analyzes every detail and provides actionable recommendations to boost your chances."
            features={[
              "Match score against job descriptions with detailed breakdown",
              "Identify missing keywords and skills to add",
              "Highlight strengths and areas for improvement",
              "Get specific recommendations to enhance impact"
            ]}
            imageSrc="/RersumeAnalyzer.png"
            imageAlt="AI Resume Analyzer Dashboard"
            reversed={true}
            gradient="from-[#3D9A8B] to-[#63C2D2]"
          />

          <Box my={80} />

          {/* Feature 3: Career Guidance */}
          <FeatureSection
            title="AI Career Guidance"
            description="Receive personalized career advice powered by advanced AI. Discover your next career move, identify skill gaps, and get a roadmap for success."
            features={[
              "Personalized role recommendations based on your profile",
              "Skill gap analysis with learning path suggestions",
              "Salary insights and market trends for your field",
              "Recommended companies that match your career goals"
            ]}
            imageSrc="/CareerGuidance.png"
            imageAlt="Career Guidance Interface"
            reversed={false}
            gradient="from-[#63C2D2] to-[#2EB19F]"
          />

          <Box my={80} />

          {/* Feature 4: Application Tracking */}
          <FeatureSection
            title="Application Tracking"
            description="Stay organized and never miss a follow-up. Track all your applications in one powerful dashboard with real-time status updates."
            features={[
              "Visual timeline of application status changes",
              "Automated email notifications for status updates",
              "Notes and reminders for each application",
              "Analytics on your application success rate"
            ]}
            imageSrc="/ApplicationTracking.png"
            imageAlt="Application Tracking Dashboard"
            reversed={true}
            gradient="from-[#2EB19F] to-[#63C2D2]"
          />
        </Container>
      </Box>

      {/* CTA Section */}
      <Container size="xl" py={100} style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          <Paper
            radius="xl"
            style={{
              background: 'linear-gradient(135deg, #2EB19F 0%, #3D9A8B 50%, #63C2D2 100%)',
              position: 'relative',
              overflow: 'hidden',
              border: 'none'
            }}
          >
            {/* Decorative Grid Pattern */}
            <Box style={{ 
              position: 'absolute', 
              inset: 0, 
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              opacity: 0.3
            }} />
            
            {/* Animated Floating Shapes */}
            <motion.div
              style={{ 
                position: 'absolute', 
                top: '20%', 
                right: '10%', 
                width: 150, 
                height: 150, 
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                background: 'rgba(255,255,255,0.15)',
                filter: 'blur(30px)'
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
                transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <motion.div
              style={{ 
                position: 'absolute', 
                bottom: '15%', 
                left: '8%', 
                width: 120, 
                height: 120, 
                borderRadius: '70% 30% 30% 70% / 60% 40% 60% 40%',
                background: 'rgba(255,255,255,0.15)',
                filter: 'blur(30px)'
              }}
              animate={{
                y: [0, 15, 0],
                rotate: [0, -10, 0],
                transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
            />

            <Grid gutter={60} align="center" p={{ base: 40, md: 60 }}>
              {/* Left Side - Content */}
              <Grid.Col span={{ base: 12, md: 7 }} style={{ position: 'relative', zIndex: 1 }}>
                <Stack gap="xl">
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                    style={{ width: 'fit-content' }}
                  >
                    <Box
                      style={{
                        padding: '16px',
                        borderRadius: '16px',
                        background: 'rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.3)',
                        width: 'fit-content'
                      }}
                    >
                      <IconStars size={40} color="white" stroke={2} />
                    </Box>
                  </motion.div>

                  <Title order={2} size={52} fw={900} c="white" style={{ letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                    Ready to Soar to New Heights?
                  </Title>
                  
                  <Text size="lg" c="white" fw={500} style={{ lineHeight: 1.7, opacity: 0.95, fontSize: '18px' }}>
                    Join thousands of professionals who trust JobSoar to elevate their careers. Discover opportunities, get expert insights, and land roles you'll love.
                  </Text>

                  {/* Stats Row */}
                  <Group gap={40} mt="md">
                    {[
                      { value: '50K+', label: 'Active Jobs' },
                      { value: '25K+', label: 'Happy Users' },
                      { value: '98%', label: 'Success Rate' }
                    ].map((stat, idx) => (
                      <Stack key={idx} gap={4}>
                        <Text size="xl" fw={900} c="white" style={{ fontSize: '28px' }}>
                          {stat.value}
                        </Text>
                        <Text size="sm" c="white" fw={600} style={{ opacity: 0.9 }}>
                          {stat.label}
                        </Text>
                      </Stack>
                    ))}
                  </Group>

                  <Group gap="md" mt="lg">
                    <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        size="xl"
                        variant="white"
                        color="dark"
                        rightSection={<IconArrowRight size={20} />}
                        fw={700}
                        radius="md"
                        style={{ 
                          fontSize: '17px', 
                          padding: '18px 32px', 
                          height: 'auto',
                          boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                        }}
                      >
                        Get Started Free
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        size="xl"
                        variant="outline"
                        color="white"
                        fw={700}
                        radius="md"
                        style={{ 
                          fontSize: '17px', 
                          padding: '18px 32px', 
                          height: 'auto',
                          borderWidth: '2px',
                          borderColor: 'white',
                          color: 'white',
                          background: 'transparent'
                        }}
                      >
                        View Demo
                      </Button>
                    </motion.div>
                  </Group>
                </Stack>
              </Grid.Col>

              {/* Right Side - Visual Element */}
              <Grid.Col span={{ base: 12, md: 5 }} style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                  initial={{ x: 50, opacity: 0, rotate: 5 }}
                  whileInView={{ x: 0, opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  viewport={{ once: true }}
                >
                  <Stack gap="lg">
                    {/* Feature Cards */}
                    {[
                      { icon: IconRocket, text: 'Lightning Fast Matching', color: 'rgba(255,255,255,0.95)' },
                      { icon: IconBrain, text: 'AI-Powered Insights', color: 'rgba(255,255,255,0.85)' },
                      { icon: IconTrendingUp, text: 'Career Growth Tools', color: 'rgba(255,255,255,0.75)' }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: idx * 0.15 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 10, scale: 1.05 }}
                      >
                        <Paper
                          p="lg"
                          radius="lg"
                          style={{
                            background: item.color,
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.3)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                          }}
                        >
                          <Group gap="md">
                            <Box
                              style={{
                                padding: '10px',
                                borderRadius: '10px',
                                background: 'linear-gradient(135deg, #2EB19F 0%, #63C2D2 100%)'
                              }}
                            >
                              <item.icon size={24} color="white" stroke={2} />
                            </Box>
                            <Text size="md" fw={700} c="#2a2a2a">
                              {item.text}
                            </Text>
                          </Group>
                        </Paper>
                      </motion.div>
                    ))}
                  </Stack>
                </motion.div>
              </Grid.Col>
            </Grid>
          </Paper>
        </motion.div>
      </Container>
    </main>
  );
}

// Feature Section Component
function FeatureSection({ 
  title, 
  description, 
  features, 
  imageSrc, 
  imageAlt, 
  reversed,
  gradient 
}: { 
  title: string; 
  description: string; 
  features: string[]; 
  imageSrc: string; 
  imageAlt: string; 
  reversed: boolean;
  gradient: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref}>
      <Grid gutter={60} align="center">
        <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 2, md: reversed ? 2 : 1 }}>
          <motion.div
            initial={{ x: reversed ? 50 : -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          >
            <Stack gap="xl">
              <Badge 
                size="lg" 
                variant="gradient"
                gradient={{ from: '#2EB19F', to: '#63C2D2', deg: 45 }}
                fw={900}
                style={{ width: 'fit-content', fontWeight: 900 }}
              >
                FEATURE
              </Badge>
              <Title order={2} size={42} fw={900} c="#1a1a1a" style={{ letterSpacing: '-0.02em' }}>
                {title}
              </Title>
              <Text size="lg" c="#4a4a4a" fw={600} style={{ lineHeight: 1.7, fontSize: '18px' }}>
                {description}
              </Text>
              <Stack gap="md" mt="md">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Group gap="md" align="flex-start">
                      <Box
                        style={{
                          minWidth: 28,
                          height: 28,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #2EB19F 0%, #63C2D2 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: 2
                        }}
                      >
                        <IconCheck size={16} color="white" stroke={3} />
                      </Box>
                      <Text size="md" fw={600} c="#2a2a2a" style={{ flex: 1, lineHeight: 1.6 }}>
                        {feature}
                      </Text>
                    </Group>
                  </motion.div>
                ))}
              </Stack>
            </Stack>
          </motion.div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, md: reversed ? 1 : 2 }}>
          <motion.div
            initial={{ x: reversed ? -50 : 50, opacity: 0, scale: 0.95 }}
            animate={isInView ? { x: 0, opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            whileHover={{ scale: 1.02, rotate: reversed ? -1 : 1 }}
          >
            <Paper
              radius="xl"
              p="xs"
              style={{
                background: `linear-gradient(135deg, rgba(46, 177, 159, 0.1) 0%, rgba(99, 194, 210, 0.1) 100%)`,
                border: '2px solid rgba(46, 177, 159, 0.2)',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(46, 177, 159, 0.15)'
              }}
            >
              <Box style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden' }}>
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Paper>
          </motion.div>
        </Grid.Col>
      </Grid>
    </div>
  );
}

// Rotating Text Component
function RotatingText() {
  const phrases = [
    { text: 'Elevate Your Career', highlight: 'Career' },
    { text: 'Find Dream Jobs', highlight: 'Dream Jobs' },
    { text: 'Connect with Top Companies', highlight: 'Top Companies' },
    { text: 'Unlock New Opportunities', highlight: 'Opportunities' },
    { text: 'Accelerate Your Growth', highlight: 'Growth' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const currentPhrase = phrases[currentIndex];
  const parts = currentPhrase.text.split(currentPhrase.highlight);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ display: 'inline-block' }}
      >
        {parts[0]}
        <Box 
          component="span" 
          style={{
            position: 'relative',
            display: 'inline-block'
          }}
        >
          <motion.span
            style={{
              background: 'linear-gradient(135deg, #2EB19F 0%, #63C2D2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              position: 'relative',
              zIndex: 1
            }}
          >
            {currentPhrase.highlight}
          </motion.span>
          <motion.span
            style={{
              position: 'absolute',
              bottom: '-4px',
              left: 0,
              right: 0,
              height: '12px',
              background: 'rgba(46, 177, 159, 0.2)',
              borderRadius: '4px',
              zIndex: 0
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </Box>
        {parts[1]}
      </motion.div>
    </AnimatePresence>
  );
}
