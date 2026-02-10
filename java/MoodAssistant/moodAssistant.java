import java.util.Scanner;

/**
 * Mood Assistant - A console-based application that detects user mood
 * and provides motivational messages with activity suggestions.
 */
public class moodAssistant {
    
    public static void main(String[] args) {
        // Create Scanner object for user input
        Scanner scanner = new Scanner(System.in);
        
        // Display welcome message
        displayWelcomeMessage();
        
        // Prompt user for input
        System.out.println("How are you feeling today?");
        System.out.print("> ");
        
        // Read full line of user input
        String userInput = scanner.nextLine();
        
        // Convert input to lowercase for easy keyword matching
        String lowerInput = userInput.toLowerCase();
        
        // Detect mood based on keywords
        String mood = detectMood(lowerInput);
        
        // Display mood analysis with suggestions
        displayMoodAnalysis(mood);
        
        // Close scanner
        scanner.close();
        
        // End message
        System.out.println("\nTake care! Have a great day! 💫");
    }
    
    /**
     * Display welcome message to the user
     */
    private static void displayWelcomeMessage() {
        System.out.println("---------------------------------");
        System.out.println("   Welcome to Mood Assistant");
        System.out.println("---------------------------------");
    }
    
    /**
     * Detect mood based on keywords in user input
     * Uses if-else statements to check for mood keywords
     * 
     * @param input the user input converted to lowercase
     * @return the detected mood as a String
     */
    private static String detectMood(String input) {
        // Check for HAPPY mood keywords
        if (input.contains("happy") || input.contains("good") || 
            input.contains("great") || input.contains("excited") || 
            input.contains("awesome") || input.contains("joy")) {
            return "Happy";
        }
        
        // Check for SAD mood keywords
        else if (input.contains("sad") || input.contains("lonely") || 
                 input.contains("depressed") || input.contains("low") || 
                 input.contains("upset") || input.contains("down")) {
            return "Sad";
        }
        
        // Check for STRESSED mood keywords
        else if (input.contains("stressed") || input.contains("tired") || 
                 input.contains("pressure") || input.contains("exam") || 
                 input.contains("workload") || input.contains("overwhelmed")) {
            return "Stressed";
        }
        
        // Check for ANGRY mood keywords
        else if (input.contains("angry") || input.contains("mad") || 
                 input.contains("irritated") || input.contains("annoyed") || 
                 input.contains("furious") || input.contains("frustrated")) {
            return "Angry";
        }
        
        // Default to NEUTRAL if no keywords match
        else {
            return "Neutral";
        }
    }
    
    /**
     * Display mood analysis including emoji, motivational message, and suggestions
     * 
     * @param mood the detected mood
     */
    private static void displayMoodAnalysis(String mood) {
        System.out.println("---------------------------------");
        
        // Display mood with emoji based on detected mood
        if (mood.equals("Happy")) {
            System.out.println("Mood Detected: " + mood + " 😊");
            System.out.println("Message: That's wonderful! Keep spreading that positive energy!");
            System.out.println("Suggestions:");
            System.out.println("- Share your happiness with someone close");
            System.out.println("- Enjoy your favorite activity or hobby");
            System.out.println("- Celebrate your small wins");
        }
        
        else if (mood.equals("Sad")) {
            System.out.println("Mood Detected: " + mood + " 😢");
            System.out.println("Message: It's okay to feel sad. Remember, this too shall pass.");
            System.out.println("Suggestions:");
            System.out.println("- Talk to someone you trust about your feelings");
            System.out.println("- Take a walk in nature to refresh your mind");
            System.out.println("- Listen to music that uplifts your mood");
        }
        
        else if (mood.equals("Stressed")) {
            System.out.println("Mood Detected: " + mood + " 😰");
            System.out.println("Message: Take a deep breath. You are doing your best.");
            System.out.println("Suggestions:");
            System.out.println("- Take a short break and relax");
            System.out.println("- Practice deep breathing exercises");
            System.out.println("- Organize your tasks into manageable steps");
        }
        
        else if (mood.equals("Angry")) {
            System.out.println("Mood Detected: " + mood + " 😠");
            System.out.println("Message: It's okay to feel angry. Take time to calm down.");
            System.out.println("Suggestions:");
            System.out.println("- Step away from the situation temporarily");
            System.out.println("- Do some physical exercise to release tension");
            System.out.println("- Write down your feelings in a journal");
        }
        
        else if (mood.equals("Neutral")) {
            System.out.println("Mood Detected: " + mood + " 😐");
            System.out.println("Message: You seem to be feeling okay. That's perfectly fine!");
            System.out.println("Suggestions:");
            System.out.println("- Try something new and exciting");
            System.out.println("- Spend quality time with friends or family");
            System.out.println("- Work on a project you've been thinking about");
        }
        
        System.out.println("---------------------------------");
    }
}
