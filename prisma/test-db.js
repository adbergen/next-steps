import { PrismaClient } from '@prisma/client'

async function testDatabase() {
  const prisma = new PrismaClient()

  try {
    console.log('🔍 Testing database connection...')

    // Test basic connection
    await prisma.$connect()
    console.log('✅ Database connection successful')

    // Test counting users (should be 0 initially)
    const userCount = await prisma.user.count()
    console.log(`📊 Current user count: ${userCount}`)

    // Test that all tables exist by counting records
    const accountCount = await prisma.account.count()
    const sessionCount = await prisma.session.count()
    const tokenCount = await prisma.verificationToken.count()
    const authCount = await prisma.authenticator.count()

    console.log('📋 Table verification:')
    console.log(`   Users: ${userCount}`)
    console.log(`   Accounts: ${accountCount}`)
    console.log(`   Sessions: ${sessionCount}`)
    console.log(`   Verification Tokens: ${tokenCount}`)
    console.log(`   Authenticators: ${authCount}`)
  } catch (error) {
    if (error instanceof Error) {
      console.error('❌ Database test failed:', error.message)
    } else {
      console.error('❌ Database test failed:', error)
    }
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

testDatabase()
